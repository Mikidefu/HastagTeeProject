import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Subscription} from 'rxjs';
import {JwtResponse} from '../../response/JwtResponse';
import {Router} from '@angular/router';
import {Role} from '../../enum/Role';
import {filter} from 'rxjs/operators';
import {NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

    selectedCategoryId: number | null = null;
    currentUserSubscription: Subscription;
    name$;
    name: string;
    currentUser: JwtResponse;
    root = '/';
    Role = Role;

    constructor(private userService: UserService,
                private router: Router,
    ) {

    }


    ngOnInit() {
        this.name$ = this.userService.name$.subscribe(aName => this.name = aName);
        this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
            this.currentUser = user;
            if (!user || user.role === Role.Customer) {
                this.root = '/';
            } else {
                this.root = '/seller';
            }
        });
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          const url = this.router.url;
          const match = url.match(/\/category\/(\d+)/);
          this.selectedCategoryId = match ? +match[1] : null;
        });
    }

    ngOnDestroy(): void {
        this.currentUserSubscription.unsubscribe();
    }

    logout() {
        this.userService.logout();
    }

}
