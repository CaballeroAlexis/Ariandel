import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, take,tap } from 'rxjs/operators';
import {AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from '../services/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private authService:AuthService, private router:Router,afAuth:AngularFireAuth) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState
    .pipe(
      take(1)
    
    ).pipe(map(authState => !! authState))
    .pipe(tap( authenticated => {
      if (!authenticated) {
        this.router.navigate(['/login']);
      }
   }));
   

  }
}
