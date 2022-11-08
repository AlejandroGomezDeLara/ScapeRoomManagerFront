import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  public pages=[
    {
      name:'Scape Rooms',
      route:'/'
    },
    {
      name:'Laser Tag',
      route:'/'
    },
    {
      name:'Carts',
      route:'/'
    },
    {
      name:'Otros eventos',
      route:'/'
    },
    {
      name:'¿Eres una empresa?',
      route:'/register'
    }

  ];

  public user!:User;

  constructor(private auth:AuthenticationService,
    public utilities:UtilitiesService) { }

  ngAfterViewInit(): void {
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
