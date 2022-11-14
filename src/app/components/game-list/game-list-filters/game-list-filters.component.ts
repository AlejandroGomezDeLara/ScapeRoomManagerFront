import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
export class GameListFiltersComponent implements OnInit,AfterViewInit {

  @Output() filter= new EventEmitter<any>();
  @ViewChild('addresstext') addresstext: any;
  autocompleteInput!: string;


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

  //Parametros
  public url_category_id?:number; // c
  public selected_address?:string; // a
  public selected_name?:string; // q

  private priceChanged: Subject<[number,number]> = new Subject<[number,number]>();
  private peopleChanged: Subject<[number,number]> = new Subject<[number,number]>();
  private durationChanged: Subject<[number,number]> = new Subject<[number,number]>();
  private nameChanged:Subject<string>=new Subject<string>();

  constructor(private apiService:ApiService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    combineLatest([this.priceChanged,this.peopleChanged,this.durationChanged,this.nameChanged]).pipe(debounceTime(500)).subscribe(([price,people,duration,name])=>{
      this.filterGames();
    });
    this.nameChanged.next("");
    this.route.queryParams
      .subscribe(params => {
        this.url_category_id = params["c"];
        this.selected_address= params["a"];
        this.selected_name= params["q"];
      }
    );
   
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
      selected_name:this.selected_name,
      selected_address:this.selected_address,
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
    this.peopleChanged.unsubscribe();
    this.durationChanged.unsubscribe();
    this.nameChanged.unsubscribe();
  }


  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
        {
            componentRestrictions: { country: 'ES' },
            types: ['(regions)'],
          });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.selected_address=place.address_components![0].long_name;
        this.filterGames();
    });
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  public checkAddressEmpty():void{    
    if(this.selected_address == "")this.filterGames();
  }

  public checkName():void{
    console.log("XD");
    this.nameChanged.next(this.selected_name!);
  }
 
}
