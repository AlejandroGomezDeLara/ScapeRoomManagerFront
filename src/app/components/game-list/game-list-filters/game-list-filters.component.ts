import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options } from 'ng5-slider';
import { combineLatest, debounceTime, delay, forkJoin, Observable, Subject } from 'rxjs';
import { GameCategory } from 'src/app/models/GameCategory';
import { GameSubcategory } from 'src/app/models/GameSubcategory';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-game-list-filters',
  templateUrl: './game-list-filters.component.html',
  styleUrls: ['./game-list-filters.component.scss']
})
export class GameListFiltersComponent implements OnInit, AfterViewInit {

  @Output() filter = new EventEmitter<any>();
  @ViewChild('addresstext') addresstext: any;
  @Input() autocompleteInput?: string;
  @Input() locate: boolean = false;

  public priceOptions: Options = {
    floor: 0,
    ceil: 200,
  }

  public peopleOptions: Options = {
    floor: 1,
    ceil: 100,
  }

  public durationOptions: Options = {
    floor: 15,
    ceil: 300,
  }

  public min_price: number = 0;
  public max_price: number = 200;

  public min_people: number = 1;
  public max_people: number = 100;

  public min_duration: number = 15;
  public max_duration: number = 300;


  public selected_categories: GameCategory[] = [];

  public selected_subcategories: GameSubcategory[] = [];

  categories: GameCategory[] = [];
  subcategories: GameSubcategory[] = [];
  selected_categories_ids: number[] = [];
  selected_subcategories_ids: number[] = [];

  //Parametros
  public url_category_id?: number; // c
  public selected_address?: string; // a
  public selected_name?: string; // q

  private nameChanged: Subject<string> = new Subject<string>();

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private loading:LoadingService) { }

  ngOnInit(): void {

    //Realizar para ejecutar método búsqueda con nombre ("")
    this.nameChanged.next("");

    //Recibimos los parametros de la url
    this.route.queryParams
      .subscribe(params => {
        this.url_category_id = params["c"];
        this.selected_address = params["a"];
        this.selected_name = params["q"];
      }
      );

    this.nameChanged.pipe(debounceTime(1000)).subscribe(() => {
      this.filterGames();
    });

    //Obtenemos categorias y subcategorias
    this.getCategories();

    if (this.locate) {
      this.setActualLocation();
    }
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }


  public filterGames(): void {
    let filters = {
      min_price: this.min_price,
      max_price: this.max_price,
      min_people: this.min_people,
      max_people: this.max_people,
      min_duration: this.min_duration,
      max_duration: this.max_duration,
      selected_categories: this.selected_categories,
      selected_subcategories: this.selected_subcategories,
      selected_categories_ids: this.selected_categories_ids,
      selected_subcategories_ids: this.selected_subcategories_ids,
      selected_name: this.selected_name,
      selected_address: this.selected_address,
    }
    this.filter.emit(filters);
  }

  public changePrice(e: any): void {
    this.min_price = e.value;
    this.max_price = e.highValue;
    setTimeout(() => {
      this.filterGames();
    }, 1000)
  }

  public changePeople(e: any): void {
    this.min_people = e.value;
    this.max_people = e.highValue;
    setTimeout(() => {
      this.filterGames();
    }, 1000)
  }

  public changeDuration(e: any): void {
    this.min_duration = e.value;
    this.max_duration = e.highValue;
    setTimeout(() => {
      this.filterGames();
    }, 1000)
  }

  public getCategories(): void {
    let obGameCategories: Observable<GameCategory[]> = this.apiService.getEntity('categories');
    let obGameSubcategories: Observable<GameSubcategory[]> = this.apiService.getEntity('subcategories');
    let requests = [obGameCategories, obGameSubcategories];
    forkJoin(requests).subscribe(([categories, subcategories]) => {
      this.categories = categories;
      this.subcategories = subcategories;
      //SELECCIONAR CATEGORIA DE LA URL
      if (this.url_category_id)
        this.selectCategory(this.url_category_id);

    }, error => {
      console.log(error);
    });
  }

  public selectCategory(id: number): void {
    if (!this.selected_categories_ids.some(x => x == id)) {
      this.selected_categories_ids.push(id);
    } else {
      this.selected_categories_ids = this.selected_categories_ids.filter(x => x != id)
    }

    if (!this.selected_categories.some(x => x.id == id)) {
      this.selected_categories.push(this.categories.find(x => x.id == id)!);
    } else {
      this.selected_categories = this.selected_categories.filter(x => x.id != id);
    }

    this.filterGames();

  }

  public selectSubcategory(id: number): void {
    if (!this.selected_subcategories_ids.some(x => x == id)) {
      this.selected_subcategories_ids.push(id);
    } else {
      this.selected_subcategories_ids = this.selected_subcategories_ids.filter(x => x != id)
    }

    if (!this.selected_subcategories.some(x => x.id == id)) {
      this.selected_subcategories.push(this.subcategories.find(x => x.id == id)!);
    } else {
      this.selected_subcategories = this.selected_subcategories.filter(x => x.id != id);
    }
    this.filterGames();

  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
      {
        componentRestrictions: { country: 'ES' },
        types: ['(regions)'],
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.selected_address = place.address_components![0].long_name;
      this.filterGames();
    });
  }



  public checkAddressEmpty(): void {
    if (this.selected_address == "") this.filterGames();
  }

  public checkName(): void {
    this.nameChanged.next(this.selected_name!);
  }

  ngOnDestroy(): void {
    this.nameChanged.unsubscribe();
  }

  public setActualLocation(): void {
    this.loading.startLoading();
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      let geocoder = new google.maps.Geocoder();
      let latlng = new google.maps.LatLng(coords.latitude, coords.longitude);


      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results![0] != null) {
            var user_city = results![0].address_components.filter(ac => ~ac.types.indexOf('locality'))[0].long_name
            this.selected_address = user_city;
            console.log(user_city);
            this.filterGames();
          } else {
            alert("No address available");
          }
        }
      });
    }, error => {
      alert('No se pudo obtener la geolocalización');
      console.log(error);
      this.filterGames();
    });




  }

}
