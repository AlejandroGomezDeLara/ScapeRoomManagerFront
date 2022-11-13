import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  public min_price:number=0;
  public max_price:number=200;

  public min_people:number=1;
  public max_people:number=100;

  public min_duration:number=15;
  public max_duration:number=300;



  public min_price_selected:number=0;
  public min_people_selected:number=0;

  public max_people_selected:number=0;
  public max_price_selected:number=0;

  public min_duration_selected:number=0;
  public max_duration_selected:number=0;

  public selected_categories:GameCategory[]=[];

  public selected_subcategories:GameSubcategory[]=[];
  
  categories:GameCategory[]=[];
  subcategories:GameSubcategory[]=[];
  selected_categories_ids:number[]=[];
  selected_subcategories_ids:number[]=[];
  public url_category_id?:number;


  private priceChanged: Subject<[number,number]> = new Subject<[number,number]>();
  private peopleChanged: Subject<[number,number]> = new Subject<[number,number]>();
  private durationChanged: Subject<[number,number]> = new Subject<[number,number]>();

  constructor(private apiService:ApiService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    combineLatest([this.priceChanged,this.peopleChanged,this.durationChanged]).pipe(debounceTime(500)).subscribe(([price,people,duration])=>{
      this.filterGames();
    });
    this.url_category_id = +this.route.snapshot.paramMap.get('category_id')!;
    console.log("CATEGORIA sleccionada",this.url_category_id);
   
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
      selected_categories:this.selected_categories,
      selected_subcategories:this.selected_subcategories,
      selected_categories_ids:this.selected_categories_ids,
      selected_subcategories_ids:this.selected_subcategories_ids,
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
      this.subcategories=subcategories;
      //SELECCIONAR CATEGORIA DE LA URL
      if(this.url_category_id)
        this.selectCategory(this.url_category_id);  

    },error=>{
      console.log(error);
    });
  }

  public selectCategory(id:number):void{
    if(!this.selected_categories_ids.some(x=>x == id)){
      this.selected_categories_ids.push(id);
    }else{
      this.selected_categories_ids=this.selected_categories_ids.filter(x=>x != id)
    }
    
    if(!this.selected_categories.some(x=>x.id == id)){
      this.selected_categories.push(this.categories.find(x=>x.id==id)!);
    }else{
      this.selected_categories=this.selected_categories.filter(x=>x.id != id);
    }

    this.filterGames();
 
  }

  public selectSubcategory(id:number):void{
    if(!this.selected_subcategories_ids.some(x=>x == id)){
      this.selected_subcategories_ids.push(id);
    }else{
      this.selected_subcategories_ids=this.selected_subcategories_ids.filter(x=>x != id)
    }
    
    if(!this.selected_subcategories.some(x=>x.id == id)){
      this.selected_subcategories.push(this.subcategories.find(x=>x.id==id)!);
    }else{
      this.selected_subcategories=this.selected_subcategories.filter(x=>x.id != id);
    }
    this.filterGames();

  }

  ngOnDestroy(): void {
    this.priceChanged.unsubscribe();
  }
}
