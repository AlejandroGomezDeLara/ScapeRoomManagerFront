import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticationState = new BehaviorSubject('');

  constructor() {
    this.checkToken();
  }

  public checkToken() {
    let token=localStorage.getItem(TOKEN_KEY);
    if(token)
      this.authenticationState.next(token);
  }

  public login(token:string):void{
    localStorage.setItem(TOKEN_KEY, token);
    this.authenticationState.next(token);
  }

  public logout():void{
    localStorage.removeItem(TOKEN_KEY);
    this.authenticationState.next('logout');
  }

  public isAuthenticated(): string {
    return this.authenticationState.value;
  }

}