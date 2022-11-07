import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-scape-list',
  templateUrl: './scape-list.component.html',
  styleUrls: ['./scape-list.component.scss']
})
export class ScapeListComponent implements OnInit {

  public scapes:Game[]=[
    {
      id:1,
      name:'Dadoo Scape Room',
      rating:4,
      reviews:123,
      address:'C/Alberto Durán Tejera nº5, Rota, Cádiz',
      description:'Este es el mejor Scape que existe porque es de miedo jaja',
      image:'assets/imgs/scape.jpeg',
      category:{
        name:'Scape Room',
        color:'#6b1b91',
        background_color:'#e8c1fa'
      },
      subcategory:{
        name:'Miedo',
        color:'#343a40',
        background_color:'#cfd2d2'
      },
    },
    {
      id:2,
      name:'Laser Tag Jerez de la frontera',
      reviews:42,
      address:'Avenida La Marina nº5, Jerez, Cádiz',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore hic, excepturi ratione officiis doloremque blanditiis consequatur eaque dicta illum debitis corporis dolore ullam mollitia et saepe expedita molestias. Et, quis.',
      image:'assets/imgs/laser-tag.jpeg',
      category:{
        name:'Laser Tag',
        color:'#2a26ac',
        background_color:'#adabf7'
      },
    },
    {
      id:3,
      name:'Carts Área Sur Jerez',
      reviews:54,
      address:'Avenida La Marina nº5, Jerez, Cádiz',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore hic, excepturi ratione officiis doloremque blanditiis consequatur eaque dicta illum debitis corporis dolore ullam mollitia et saepe expedita molestias. Et, quis.',
      image:'assets/imgs/carts.jpeg',
      category:{
        name:'Carts',
        color:'#234f0f',
        background_color:'#c4f5ae'
      },
      subcategory:{
        name:'Interior',
        color:'#343a40',
        background_color:'#cfd2d2'
      },
    },
    {
      id:4,
      name:'San Fernando Scape Room',
      reviews:54,
      address:'Avenida La Marina nº5, Jerez, Cádiz',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore hic, excepturi ratione officiis doloremque blanditiis consequatur eaque dicta illum debitis corporis dolore ullam mollitia et saepe expedita molestias. Et, quis.',
      image:'assets/imgs/scape.jpeg',
      category:{
        name:'Scape Room',
        color:'#6b1b91',
        background_color:'#e8c1fa'
      },
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public searchGames(places:google.maps.places.PlaceResult):void{
    alert(places);
  }
  

}
