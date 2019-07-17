import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { AuthService } from './../_services/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private router: Router,
        private alertify: AlertifyService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        console.log('TOKEN ' + this.authService.decodedToken);
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving your data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
