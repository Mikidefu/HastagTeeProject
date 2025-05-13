import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {


    constructor(
        private router: Router,
        private userService: UserService
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const currentUser = this.userService.currentUserValue;
        if (currentUser) {
            // Controlla le autorizzazioni di ruolo
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                console.log(currentUser.role + 'fail in ' + route.data.roles);
                // se il ruolo non è autorizzato torna alla home
                this.router.navigate(['/']);
                return false;
            }
            // ritorna true se autorizzato
            return true;
        }

        console.log('Need log in');
        // Se non effettua il login riporta alla pagina di login con l'url{queryParams: {returnUrl: state.url}}
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
