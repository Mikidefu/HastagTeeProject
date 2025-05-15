import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {apiUrl} from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {UserService} from './user.service';
import {Cart} from '../models/Cart';
import {Item} from '../models/Item';
import {JwtResponse} from '../response/JwtResponse';
import {ProductInOrder} from '../models/ProductInOrder';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cartUrl = `${apiUrl}/cart`;

  localMap = {};


  private itemsSubject: BehaviorSubject<Item[]>;
  private totalSubject: BehaviorSubject<number>;
  public items: Observable<Item[]>;
  public total: Observable<number>;


  private currentUser: JwtResponse;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private userService: UserService) {
    this.itemsSubject = new BehaviorSubject<Item[]>(null);
    this.items = this.itemsSubject.asObservable();
    this.totalSubject = new BehaviorSubject<number>(null);
    this.total = this.totalSubject.asObservable();
    this.userService.currentUser.subscribe(user => this.currentUser = user);


  }

  private getLocalCart(): ProductInOrder[] {
    if (this.cookieService.check('cart')) {
      this.localMap = JSON.parse(this.cookieService.get('cart'));
      return Object.values(this.localMap);
    } else {
      this.localMap = {};
      return [];
    }
  }

  getCart(): Observable<ProductInOrder[]> {
    const localCart = this.getLocalCart();
    if (this.currentUser) {
      if (localCart.length > 0) {
        return this.http.post<Cart>(this.cartUrl, localCart).pipe(
          tap(_ => {
            this.clearLocalCart();
          }),
          map(cart => cart.products),
          catchError(_ => of([]))
        );
      } else {
        return this.http.get<Cart>(this.cartUrl).pipe(
          map(cart => cart.products),
          catchError(_ => of([]))
        );
      }
    } else {
      return of(localCart);
    }
  }

  addItem(productInOrder): Observable<boolean> {
    if (!this.currentUser) {
      // Se non c'è un utente loggato, aggiorna il carrello nel cookie
      if (this.cookieService.check('cart')) {
        this.localMap = JSON.parse(this.cookieService.get('cart'));
      }

      // Se il prodotto non è presente nel carrello, aggiungilo
      if (!this.localMap[productInOrder.productId]) {
        this.localMap[productInOrder.productId] = productInOrder;
      } else {
        this.localMap[productInOrder.productId].count += productInOrder.count;
      }

      // Aggiorna il cookie con il carrello locale
      this.cookieService.set(
        'cart',
        JSON.stringify(this.localMap),
        2,                 // durata in giorni
        '/',               // path
        undefined,         // dominio
        false,             // secure
        'Lax'              // sameSite
      );
      console.log('Carrello locale aggiornato:', JSON.stringify(this.localMap));  // Aggiungi questo log


      return of(true);
    } else {
      // Per gli utenti loggati, invia la richiesta al server
      const url = `${this.cartUrl}/add`;
      return this.http.post<boolean>(url, {
        'quantity': productInOrder.count,
        'productId': productInOrder.productId
      });
    }
  }

  update(productInOrder): Observable<ProductInOrder> {

    if (this.currentUser) {
      const url = `${this.cartUrl}/${productInOrder.productId}`;
      return this.http.put<ProductInOrder>(url, productInOrder.count);
    }
  }


  remove(productInOrder) {
    if (!this.currentUser) {
      delete this.localMap[productInOrder.productId];
      return of(null);
    } else {
      const url = `${this.cartUrl}/${productInOrder.productId}`;
      return this.http.delete(url).pipe( );
    }
  }


  checkout(): Observable<any> {
    const url = `${this.cartUrl}/checkout`;
    return this.http.post(url, null).pipe();
  }

  storeLocalCart() {
    this.cookieService.set('cart', JSON.stringify(this.localMap));
  }

  clearLocalCart() {
    console.log('Svuota carrello locale');
    this.cookieService.delete('cart');
    this.localMap = {};
  }

}
