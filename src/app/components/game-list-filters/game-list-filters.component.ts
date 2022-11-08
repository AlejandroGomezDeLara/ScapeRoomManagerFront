import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list-filters',
  templateUrl: './game-list-filters.component.html',
  styleUrls: ['./game-list-filters.component.scss']
})
export class GameListFiltersComponent implements OnInit {

  public min_price:number=10;
  public max_price:number=100;
  public min_price_selected:number=10;
  public max_price_selected:number=100;

  constructor() { }

  ngOnInit(): void {
  }

  public changePrice(e:any):void{
    this.min_price_selected=e[0];
    this.max_price_selected=e[1];

  }
}
