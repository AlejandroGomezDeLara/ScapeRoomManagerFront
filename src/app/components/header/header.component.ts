import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
      route:'/login'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
