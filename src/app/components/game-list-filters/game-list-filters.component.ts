import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list-filters',
  templateUrl: './game-list-filters.component.html',
  styleUrls: ['./game-list-filters.component.scss']
})
export class GameListFiltersComponent implements OnInit {

  public min_price:number=10;
  public max_price:number=100;

  public min_price_selected:number=0;
  public min_people_selected:number=0;

  public max_people_selected:number=0;
  public max_price_selected:number=0;

  public min_duration_selected:number=0;
  public max_duration_selected:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  public changePrice(e:any):void{
    this.min_price_selected=e[0];
    this.max_price_selected=e[1];
  }

  public changePeople(e:any):void{
    this.min_people_selected=e[0];
    this.max_people_selected=e[1];
  }

  public changeDuration(e:any):void{
    this.min_duration_selected=e[0];
    this.max_duration_selected=e[1];
  }
}
