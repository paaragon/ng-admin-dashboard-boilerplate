import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRoles = route.data.expectedRoles;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload = decode(token);
    if (
      !this.auth.isAuthenticated() ||
      expectedRoles.indexOf(tokenPayload.role) === -1
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
