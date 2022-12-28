import { HttpClient } from '@angular/common/http';
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

  @HostListener('document:visibilitychange') 
  protected onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      this.setUserOffline();
    }
  }

  @HostListener("window:focus")
  protected onFocus() {
    this.setUserOnline();
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


  public setUserOnline():void{
    if(this.user){
      this.user.online = true;
      this.apiService.updateEntity('users', this.user.id!, this.user).subscribe(() => {
        console.log("user online");
      }, (error: HttpClient) => {
        console.log(error);
      });
    }
    
  }

  public setUserOffline():void{
    if(this.user){
      this.user.online = false;
      this.apiService.updateEntity('users', this.user.id!, this.user).subscribe(() => {
        console.log("user offline");
      }, (error: HttpClient) => {
        console.log(error);
      });
    }
  }
}
