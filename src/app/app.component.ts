import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
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

  @HostListener("click")
  protected onFocus() {
    this.auth.setUserIsOnline(true);
  }

  @HostListener('document:visibilitychange') 
  protected onVisibilityChange() {
        if (document.visibilityState === 'hidden') {
      this.auth.setUserIsOnline(false);
    }
  }

  ngOnInit(): void {
    this.auth.authenticationState.subscribe(token => {
      if (token != 'logout' && token != '') {
        let user: User = this.auth.getStorageUser();
        this.user = user;
        parent.postMessage(user.id, '*');
        let token = localStorage.getItem('auth-token');
        this.apiService.setTokenToHeaders(token);
        this.listenForMessages();
        this.auth.setUserIsOnline(true);
        this.redirect();
      } else if (token == 'logout') {

        this.router.navigateByUrl('/');
        this.apiService.setTokenToHeaders(null);
        this.auth.setUserIsOnline(false);
        clearInterval(this.newMessagesInterval);
        this.newMessagesInterval = null;
      } else {
        console.log("sin token");
      }
    });

    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage);
    } else {
      (<any>window).attachEvent("onmessage", this.receiveMessage);
    }
  }

  public receiveMessage: any = (event: MessageEvent) => {
    console.log("recibido xd", event);
   
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

}
