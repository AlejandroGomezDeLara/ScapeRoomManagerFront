import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scape-list-filters',
  templateUrl: './scape-list-filters.component.html',
  styleUrls: ['./scape-list-filters.component.scss']
})
export class ScapeListFiltersComponent implements OnInit {

  public min_price:number=10;
  public max_price:number=100;
  public price_selected:number=0;

  constructor() { }

  ngOnInit(): void {
    this.price_selected=this.max_price/2;
  }

  public changePrice(e:any):void{
    this.price_selected=e.target.value;
  }
}
