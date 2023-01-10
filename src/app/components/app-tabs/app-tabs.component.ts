import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingService } from 'src/app/services/loading.service';
import { NewMessagesService } from 'src/app/services/new-messages.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './app-tabs.component.html',
  styleUrls: ['./app-tabs.component.scss']
})
export class AppTabsComponent {

  public url: any;

  public pages = [
    {
      name: 'Home',
      route: '/',
      icon: 'home'
    },

    {
      name: 'Ranking',
      route: '/ranking',
      icon: 'trophy'
    },
    {
      name: 'Buscador',
      route: '/search',
      icon: '',
      image: 'assets/imgs/box-transparent-light.svg',
      image_active: 'assets/imgs/box-transparent.svg'
    },
    {
      name: 'Mapa',
      route: '/map',
      icon: 'map-location-dot'
    },
    {
      name: 'Perfil',
      route: '/login',
      icon: 'user'
    },

  ];

  public authUserPages = [

    {
      name: 'Ranking',
      route: '/ranking',
      icon: 'trophy'
    },
    {
      name: 'Mapa',
      route: '/map',
      icon: 'map-location-dot'
    },
    {
      name: 'Buscador',
      route: '/search',
      icon: '',
      image: 'assets/imgs/box-transparent-light.svg',
      image_active: 'assets/imgs/box-transparent.svg'
    },
    {
      name: 'Chats',
      route: '/chats',
      icon: 'comments'
    },
    {
      name: 'Perfil',
      route: '/profile',
      icon: 'user'
    }
  ];

  public user!: User;

  constructor(private auth: AuthenticationService,
    public utilities: UtilitiesService,
    public loading: LoadingService,
    public router: Router,
    public newMessagesService: NewMessagesService) {

  }


  ngAfterContentInit(): void {
    this.user = this.auth.getStorageUser();
  }

  ngOnInit(): void {
    this.url = this.router.url;
    this.auth.userChanges.subscribe((user: User) => {
      this.user = user;
      console.log("usuario actualizado", user);
    });
  }


  public logout(): void {
    this.auth.logout();
  }

  public navigate(url: string): void {
    this.router.navigateByUrl(url);
    this.url = url;
  }


}


