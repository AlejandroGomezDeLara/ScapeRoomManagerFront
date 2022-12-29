import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/User';
import { ApiService } from './api.service';
import { UtilitiesService } from './utilities.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticationState = new BehaviorSubject('');
  public userChanges = new BehaviorSubject<User>({});

  constructor(private apiService: ApiService,
    private utilities: UtilitiesService) {
    this.checkToken();
  }

  public checkToken() {
    let token = localStorage.getItem(TOKEN_KEY);
    if (token)
      this.authenticationState.next(token);
  }

  public login(user: User): void {
    if (user.api_token) {
      localStorage.setItem(TOKEN_KEY, user.api_token);
      this.userChanges.next(user);
      this.setStorageUser(user);
      this.authenticationState.next(user.api_token);
    }

  }

  public logout(): void {
    this.setUserIsOnline(false);
    localStorage.removeItem(TOKEN_KEY);
    this.userChanges.next({});
    this.setStorageUser({});
    this.authenticationState.next('logout');
  }

  public getStorageUser(): User {

    let user = localStorage.getItem('user-data');

    return JSON.parse(user || "[]");
  }

  public setStorageUser(user: User): void {
    localStorage.setItem('user-data', JSON.stringify(user));
  }
  public isAuthenticated(): string {
    return this.authenticationState.value;
  }

  public setUserIsOnline(online: boolean): void {
    let user = this.getStorageUser();
    if (user.online != online) {
      if (!this.utilities.isEmptyObject(user)) {
        user.online = online;
        this.setStorageUser(user);
        this.apiService.updateEntity('users', user.id!, user).subscribe((user: User) => {
          if (user.online)
            console.log("user online");
          else
            console.log("user offline");

        }, (error: HttpErrorResponse) => {
          console.log(error);
        });
      }
    }


  }

}