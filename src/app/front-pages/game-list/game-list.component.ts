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
export class GameListComponent implements OnInit,AfterViewInit {

  public isLoading:boolean=true;
  public address_selected:string='España';
  public filteredGames:Game[]=[];
  public games:Game[]=[];


  constructor(private apiService:ApiService,
    private ngZone:NgZone) { }

  ngAfterViewInit(): void {
    this.getGames();
  }

  ngOnInit(): void {
  }

  public getGames():void{
    this.apiService.getEntity('games').subscribe((games:Game[])=>{
      console.log(games);
      this.games=games;
      this.filteredGames=[...games];
      this.isLoading=false;
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
    console.log(places);
    this.filteredGames=this.filteredGames.filter(x=>{
      if(this.address_selected.includes(x.address!)
      || this.address_selected.includes(x.name!)
      || this.address_selected.includes(x.city!)){
        return true;
      }
      else return false;
    },(error:Error)=>{
      console.log(error);
    });
  }

  

  public applyFilters(event:any):void{
    
    let min_price=event.min_price;
    let max_price=event.max_price;
    let min_people=event.min_people;
    let max_people=event.max_people;
    let min_duration=event.min_duration;
    let max_duration=event.max_duration;
    
    this.ngZone.run(()=>{
      this.filteredGames=this.games.filter(x=>{
        if((x.min_price! <= max_price && x.min_price! >= min_price) &&
          (x.max_duration! >= min_duration && x.max_duration! <= max_duration) &&
          (x.min_people! <= min_people && x.max_people! <=max_people && x.max_people! >=min_people)) return true;
        else return false;
      });
    });
  }


}
