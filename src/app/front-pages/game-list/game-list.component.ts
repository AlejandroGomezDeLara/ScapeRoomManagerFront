import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { debounceTime, filter } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { GameCategory } from 'src/app/models/GameCategory';
import { GameSubcategory } from 'src/app/models/GameSubcategory';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public isLoading:boolean=true;
  public selected_address:string='';
  public selected_name:string='';
  public filteredGames:Game[]=[];
  public regionFilteredGames:Game[]=[];
  public games:Game[]=[];

  //game filtros
  min_price?:number;
  max_price?:number;
  min_people?:number;
  max_people?:number;
  min_duration?:number;
  max_duration?:number;
  selected_categories?:[number];
  selected_subcategories?:[number];
  actual_page?:number=1;
  total_game_pages?:number;

  constructor(private apiService:ApiService,
    private ngZone:NgZone) { }


  ngOnInit(): void {
  }

  public getGames(filters?:any):void{
    let url='games';
    url+='?min_price='+this.min_price;
    url+='&max_price='+this.max_price;
    url+='&min_people='+this.min_people;
    url+='&max_people='+this.max_people;
    url+='&min_duration='+this.min_duration;
    url+='&max_duration='+this.max_duration;
    url+='&selected_categories='+this.selected_categories;
    url+='&selected_subcategories='+this.selected_subcategories;
    url+='&selected_address='+this.selected_address;
    url+='&selected_name='+this.selected_name; 
    url+='&page='+this.actual_page; 

    this.apiService.getEntity(url).subscribe((games:any)=>{
        this.games=games.data;
        this.total_game_pages=games.last_page;      
        this.filteredGames=[...games.data];
        this.isLoading=false;
      
    },(error:Error)=>{
      this.isLoading=false;
      console.log(error);
    });

  }

  
  public removeAddress():void{
    this.filteredGames=[...this.games];
  }

 
  public filterByNameAndAddress(filters:[string,string]):void{
    this.ngZone.run(()=>{
      this.selected_address=filters[0];
      this.selected_name=filters[1];
      this.actual_page=1;
      this.getGames();
    })
    
  }

  

  public applyFilters(filters:any):void{   
    console.log("FILTROS",filters);
    this.min_price=filters.min_price;
    this.max_price=filters.max_price;
    this.min_people=filters.min_people;
    this.max_people=filters.max_people;
    this.min_duration=filters.min_duration;
    this.max_duration=filters.max_duration;
    this.selected_categories=filters.selected_categories;
    this.selected_subcategories=filters.selected_subcategories;
    this.total_game_pages=0;
    this.actual_page=1;
    this.getGames(filters);
  }

  public changeGamesPage(event:number):void{
    this.actual_page=event;
    this.getGames();
  }
  

}
