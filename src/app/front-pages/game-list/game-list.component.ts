import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
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
  public address_selected:string='España';
  public filteredGames:Game[]=[];
  public regionFilteredGames:Game[]=[];
  public games:Game[]=[];


  constructor(private apiService:ApiService,
    private ngZone:NgZone) { }


  ngOnInit(): void {
  }

  public getGames(filters?:any):void{
    let url='games';
    if(filters){
        url+='?min_price='+filters.min_price;
        url+='&max_price='+filters.max_price;
        url+='&min_people='+filters.min_people;
        url+='&max_people='+filters.max_people;
        url+='&min_duration='+filters.min_duration;
        url+='&max_duration='+filters.max_duration;
        url+='&selected_categories='+filters.selected_categories;
        url+='&selected_subcategories='+filters.selected_subcategories;
    }
    
    this.apiService.getEntity(url).subscribe((games:Game[])=>{
      if(Object.prototype.toString.call(games) === '[object Array]') {
        this.games=games;
        this.filteredGames=[...games];
        this.isLoading=false;
      }
      
     
    },(error:Error)=>{
      this.isLoading=false;
      console.log(error);
    });

  }

  
  public removeAddress():void{
    this.filteredGames=[...this.games];
  }

 
  public filterGamesByAddress(places:google.maps.places.PlaceResult):void{
    this.address_selected=places.address_components![0].long_name;



    this.regionFilteredGames=this.games.filter(x=>{
      if(this.address_selected.includes(x.address!)
      || this.address_selected.includes(x.name!)
      || this.address_selected.includes(x.city!)){
        return true;
      }
      else return false;
    },(error:Error)=>{
      console.log(error);
    });

    this.filteredGames=[...this.regionFilteredGames];
  }

  

  public applyFilters(filters:any):void{   
    console.log("FILTROS",filters);
    this.getGames(filters);
  }
  

}
