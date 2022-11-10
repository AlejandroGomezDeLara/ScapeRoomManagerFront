import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, debounceTime, delay, forkJoin, Observable, Subject } from 'rxjs';
import { GameCategory } from 'src/app/models/GameCategory';
import { GameSubcategory } from 'src/app/models/GameSubcategory';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game-list-filters',
  templateUrl: './game-list-filters.component.html',
  styleUrls: ['./game-list-filters.component.scss']
})
export class GameListFiltersComponent implements OnInit {

  @Output() filter= new EventEmitter<any>();


  public min_price_selected:number=0;
  public min_people_selected:number=0;

  public max_people_selected:number=0;
  public max_price_selected:number=0;

  public min_duration_selected:number=0;
  public max_duration_selected:number=0;

  public selected_categories_ids:GameCategory[]=[];

  public selected_subcategories_ids:GameSubcategory[]=[];
  
  categories:GameCategory[]=[];
  subcategories:GameSubcategory[]=[];
  categories_selected_ids:number[]=[];
  subcategories_selected_ids:number[]=[];


  private priceChanged: Subject<[number,number]> = new Subject<[number,number]>();
  private peopleChanged: Subject<[number,number]> = new Subject<[number,number]>();
  private durationChanged: Subject<[number,number]> = new Subject<[number,number]>();

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    combineLatest([this.priceChanged,this.peopleChanged,this.durationChanged]).pipe(debounceTime(500)).subscribe(([price,people,duration])=>{
      this.filterGames();
    });

    this.getCategories();
  }


  public filterGames():void{
    let filters={
      min_price:this.min_price_selected,
      max_price:this.max_price_selected,
      min_people:this.min_people_selected,
      max_people:this.max_people_selected,
      min_duration:this.min_duration_selected,
      max_duration:this.max_duration_selected,
      selected_categories:this.categories_selected_ids,
      selected_subcategories:this.subcategories_selected_ids,
    }
    this.filter.emit(filters);
  }

  public changePrice(e:any):void{
    this.priceChanged.next(e);
    this.min_price_selected=e[0];
    this.max_price_selected=e[1];
  }

  public changePeople(e:any):void{
    this.peopleChanged.next(e);
    this.min_people_selected=e[0];
    this.max_people_selected=e[1];

  }

  public changeDuration(e:any):void{
    this.durationChanged.next(e);
    this.min_duration_selected=e[0];
    this.max_duration_selected=e[1];
  }

  public getCategories():void{
    let obGameCategories:Observable<GameCategory[]>=this.apiService.getEntity('categories');
    let obGameSubcategories:Observable<GameSubcategory[]>=this.apiService.getEntity('subcategories');
    let requests=[obGameCategories,obGameSubcategories];
    forkJoin(requests).subscribe(([categories,subcategories])=>{
      this.categories=categories;
      this.subcategories=subcategories    
    },error=>{
      console.log(error);
    });
  }

  public selectCategory(id:number):void{
    if(!this.categories_selected_ids.some(x=>x == id)){
      this.categories_selected_ids.push(id);
    }else{
      this.categories_selected_ids=this.categories_selected_ids.filter(x=>x != id)
    }
    console.log(this.categories_selected_ids);
    this.filterGames();
 
  }

  public selectSubcategory(id:number):void{
    if(!this.subcategories_selected_ids.some(x=>x == id)){
      this.subcategories_selected_ids.push(id);
    }else{
      this.subcategories_selected_ids=this.subcategories_selected_ids.filter(x=>x != id)
    }
    console.log(this.subcategories_selected_ids);
    this.filterGames();

  }

  ngOnDestroy(): void {
    this.priceChanged.unsubscribe();
  }
}
