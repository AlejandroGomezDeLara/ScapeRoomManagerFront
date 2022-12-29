import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/User';
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { LoadingService } from './services/loading.service';
import { NewMessagesService } from './services/new-messages.service';
import { UtilitiesService } from './services/utilities.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public newMessagesInterval: any;
  public user?: User;

  constructor(private auth: AuthenticationService,
    private utilities: UtilitiesService,
    private router: Router,
    private apiService: ApiService,
    public loading: LoadingService,
    private newMessages: NewMessagesService) {

  }

  @HostListener("window:focus")
  protected onFocus() {
    this.setUserIsOnline(true);
  }


  ngOnInit(): void {
    this.auth.authenticationState.subscribe(token => {
      if (token != 'logout' && token != '') {
        let user: User = this.auth.getStorageUser();
        this.user = user;
        let token = localStorage.getItem('auth-token');
        this.apiService.setTokenToHeaders(token);
        this.listenForMessages();
        this.redirect();
      } else if (token == 'logout') {

        this.router.navigateByUrl('/');
        this.apiService.setTokenToHeaders(null);
        this.setUserIsOnline(false);
        clearInterval(this.newMessagesInterval);
        this.newMessagesInterval = null;
      } else {
        console.log("sin token");
      }
    });
  }

  public redirect(): void {
    console.log("redirigiendo");

    //this.router.navigateByUrl('/search');
  }

  public listenForMessages(): void {
    this.newMessagesInterval = setInterval(() => {
      this.newMessages.getNewMessagesCount();
    }, 2000);
  }


  public setUserIsOnline(online:boolean): void {
    let user = this.auth.getStorageUser();
    if (!this.utilities.isEmptyObject(user)) {
      user.online = online;
      this.auth.setStorageUser(user);
      this.apiService.updateEntity('users', user.id!, user).subscribe(() => {
        console.log("user online");
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }

  }

  ngOnDestroy(): void {
    this.setUserIsOnline(false);
  }
}
