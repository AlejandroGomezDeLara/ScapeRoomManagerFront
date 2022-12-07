import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterContentInit {

  public appName=environment.appName;
  public pages=[
    {
      name:'Eventos',
      route:'/search',
      icon:'search'
    },
    {
      name:'Ranking',
      route:'/',
      icon:'star'
    },
    {
      name:'Mapa',
      route:'/',
      icon:'map'
    },
    {
      name:'Publicaciones',
      route:'/',
      icon:'thumbs-up'
    },
    {
      name:'Empresas',
      route:'/register',
      icon:'building'
    }

  ];

  public authUserPages=[
    {
      name:'Eventos',
      route:'/search',
      icon:'search'
    },
    {
      name:'Ranking',
      route:'/',
      icon:'star'
    },
    {
      name:'Mapa',
      route:'/',
      icon:'map'
    },
    {
      name:'Publicaciones',
      route:'/',
      icon:'thumbs-up'
    },
    {
      name:'Chats',
      route:'/chats',
      icon:'comments'
    }
  ];

  public user!:User;

  constructor(private auth:AuthenticationService,
    public utilities:UtilitiesService) { }

  ngAfterContentInit(): void {
    this.user=this.auth.getStorageUser();
  }

  ngOnInit(): void {
    this.auth.userChanges.subscribe((user:User)=>{
      this.user=user;
      console.log("usuario actualizado",user);
    });
  }


  public logout():void{
    this.auth.logout();
  }

  

}
