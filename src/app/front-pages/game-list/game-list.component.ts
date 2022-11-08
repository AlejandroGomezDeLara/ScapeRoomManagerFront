import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit,AfterViewInit {

  public isLoading:boolean=true;
  public games:Game[]=[
    {
      id:1,
      name:'Dadoo Scape Room',
      rating:4,
      reviews:123,
      address:'C/Alberto Durán Tejera nº5, Rota, Cádiz',
      description:'Este es el mejor Scape que existe porque es de miedo jaja',
      image:'assets/imgs/scape.jpeg',
      min_people:2,
      max_people:6,
      min_duration:20,
      max_duration:60,
      min_price:12,
      category:{
        name:'Scape Room ',
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
      min_people:4,
      max_people:20,
      min_duration:50,
      max_duration:60,
      min_price:20,
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
      min_people:10,
      max_people:30,
      min_duration:60,
      max_duration:120,
      min_price:25,
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

  constructor(private apiService:ApiService) { }

  ngAfterViewInit(): void {
    this.getGames();
  }

  ngOnInit(): void {
  }


  public searchGames(places:google.maps.places.PlaceResult):void{
    console.log(places);
  }

  public getGames():void{
    this.apiService.getEntity('games').subscribe((games:Game[])=>{
      console.log(games);
      this.games=games;
      this.isLoading=false;
    },(error:Error)=>{
      this.isLoading=false;
      console.log(error);
    });
  }
  

}
