import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from '../../environments/environment';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {JwtResponse} from '../response/JwtResponse';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private currentUserSubject: BehaviorSubject<JwtResponse>;
    public currentUser: Observable<JwtResponse>;
    public nameTerms = new Subject<string>();
    public name$ = this.nameTerms.asObservable();
  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    let user: JwtResponse = null;

    const local = localStorage.getItem('currentUser');
    const cookie = this.cookieService.get('currentUser');

    if (local) {
      try {
        user = JSON.parse(local);
      } catch (e) {
        console.error('Errore nel parsing del localStorage:', e);
      }
    } else if (cookie) {
      try {
        user = JSON.parse(cookie);
      } catch (e) {
        console.error('Errore nel parsing del cookie:', e);
      }
    }

    this.currentUserSubject = new BehaviorSubject<JwtResponse>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue() {
        return this.currentUserSubject.value;
    }


    login(loginForm): Observable<JwtResponse> {
        const url = `${apiUrl}/login`;
        return this.http.post<JwtResponse>(url, loginForm).pipe(
            tap(user => {
                if (user && user.token) {
                    this.cookieService.set('currentUser', JSON.stringify(user));
                    if (loginForm.remembered) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                    }
                    console.log((user.name));
                    this.nameTerms.next(user.name);
                    this.currentUserSubject.next(user);
                    return user;
                }
            }),
            catchError(this.handleError('Login Fallito', null))
        );
    }

    logout() {
        this.currentUserSubject.next(null);
        localStorage.removeItem('currentUser');
        this.cookieService.delete('currentUser');
    }

    signUp(user: User): Observable<User> {
        const url = `${apiUrl}/register`;
        return this.http.post<User>(url, user);
    }

    update(user: User): Observable<User> {
        const url = `${apiUrl}/profile`;
        return this.http.put<User>(url, user);    }

    get(email: string): Observable<User> {
        const url = `${apiUrl}/profile/${email}`;
        return this.http.get<User>(url);
    }

  /**
   * Gestisce un'operazione HTTP che non è riuscita.
   * Consente all'app di continuare.
   * @param operation - nome dell'operazione che non è riuscita
   * @param result - valore opzionale da restituire come risultato dell'observable
   */

  private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.log(error); // log to console instead

            // "Consente all'app di continuare restituendo un risultato vuoto."
            return of(result as T);
        };
    }
}
