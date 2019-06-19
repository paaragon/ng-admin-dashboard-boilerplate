import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { user } from '../../fakedata/users/user';
import { admin } from '../../fakedata/users/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private jwtHelper: JwtHelperService
  ) { }

  public authenticate(username: string, password: string): Promise<boolean> {
    if (username === user.username && password === user.password) {
      localStorage.setItem('token', user.token);
      return Promise.resolve(true);
    } else if (username === admin.username && password === admin.password) {
      localStorage.setItem('token', admin.token);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }

  public isAuthenticated() {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
