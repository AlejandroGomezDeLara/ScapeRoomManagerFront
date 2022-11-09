import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameCategory } from 'src/app/models/GameCategory';
import { GameSubcategory } from 'src/app/models/GameSubcategory';

@Component({
  selector: 'app-game-list-filters',
  templateUrl: './game-list-filters.component.html',
  styleUrls: ['./game-list-filters.component.scss']
})
export class GameListFiltersComponent implements OnInit {

  public min_price:number=10;
  public max_price:number=50;

  public min_price_selected:number=0;
  public min_people_selected:number=0;

  public max_people_selected:number=0;
  public max_price_selected:number=0;

  public min_duration_selected:number=0;
  public max_duration_selected:number=0;

  public selected_categories:GameCategory[]=[];

  public selected_subcategories:GameSubcategory[]=[];

  @Output() filter= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public filterGames():void{
    let filters={
      min_price:this.min_price_selected,
      max_price:this.max_price_selected,
      min_people:this.min_people_selected,
      max_people:this.max_people_selected,
      min_duration:this.min_duration_selected,
      max_duration:this.max_duration_selected,
      selected_categories:this.selected_categories,
      selected_subcategories:this.selected_subcategories,
    }

    this.filter.emit(filters);
  }

  public changePrice(e:any):void{
    this.min_price_selected=e[0];
    this.max_price_selected=e[1];
    this.filterGames();
  }

  public changePeople(e:any):void{
    this.min_people_selected=e[0];
    this.max_people_selected=e[1];
    this.filterGames();

  }

  public changeDuration(e:any):void{
    this.min_duration_selected=e[0];
    this.max_duration_selected=e[1];
    this.filterGames();

  }
}
