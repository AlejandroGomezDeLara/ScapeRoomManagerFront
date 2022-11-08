import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/User';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticationState = new BehaviorSubject('');
  public userChanges = new BehaviorSubject<User>({});
  
  constructor() {
    this.checkToken();
  }

  public checkToken() {
    let token=localStorage.getItem(TOKEN_KEY);
    if(token)
      this.authenticationState.next(token);
  }

  public login(user:User):void{
    if(user.api_token){
      localStorage.setItem(TOKEN_KEY, user.api_token);
      this.userChanges.next(user);
      this.setStorageUser(user);
      this.authenticationState.next(user.api_token);
    }
    
  }

  public logout():void{
    localStorage.removeItem(TOKEN_KEY);
    this.userChanges.next({});
    this.setStorageUser({});
    this.authenticationState.next('logout');
  }

  public getStorageUser():User{

    let user=localStorage.getItem('user-data');

    return JSON.parse(user || "[]");
  }

  public setStorageUser(user:User):void{
    localStorage.setItem('user-data', JSON.stringify(user));
  }
  public isAuthenticated(): string {
    return this.authenticationState.value;
  }

}