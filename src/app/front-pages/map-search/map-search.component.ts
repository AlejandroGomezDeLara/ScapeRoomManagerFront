import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { GameAddress } from 'src/app/models/GameAddress';
import { GameCategory } from 'src/app/models/GameCategory';
import { GameData } from 'src/app/models/GameData';
import { GameSubcategory } from 'src/app/models/GameSubcategory';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.scss']
})
export class MapSearchComponent {

  public selected_address: string = '';
  public selected_name: string = '';
  public games: Game[] = [];
  public openReservations:OpenReservation[]=[];
  //game filtros
  min_price: number = 0;
  max_price: number = 200;
  min_people: number = 1;
  max_people: number = 100;
  min_duration: number = 15;
  max_duration: number = 300;
  selected_categories_ids: number[] = [];
  selected_subcategories_ids: number[] = [];
  selected_categories: GameCategory[] = [];
  selected_subcategories: GameSubcategory[] = [];
  actual_page?: number = 1;
  total_game_pages?: number;
  total_games?: number;



  constructor(private apiService: ApiService,
    private zone: NgZone,
    public loading: LoadingService) {
  }


  ngOnInit(): void {
    
  }

  public filterByNameAndAddress(filters: [string, string]): void {
    this.zone.run(() => {
      this.selected_address = filters[0];
      this.selected_name = filters[1];
      this.actual_page = 1;
      this.getAddressesAndOpenReservations();

    });

  }



  public applyFilters(filters: any): void {
    console.log("FILTROS", filters);
    this.zone.run(() => {
      this.min_price = filters.min_price;
      this.max_price = filters.max_price;
      this.min_people = filters.min_people;
      this.max_people = filters.max_people;
      this.min_duration = filters.min_duration;
      this.max_duration = filters.max_duration;
      this.selected_categories_ids = filters.selected_categories_ids;
      this.selected_categories = filters.selected_categories;
      this.selected_subcategories_ids = filters.selected_subcategories_ids;
      this.selected_subcategories = filters.selected_subcategories;
      this.selected_address = filters.selected_address;
      this.selected_name = filters.selected_name;
      this.total_game_pages = 0;
      this.actual_page = 1;

      console.log("FILTROS RECIBIDOS", this.selected_categories);

      this.getAddressesAndOpenReservations();

    })

  }




  public getAddressesAndOpenReservations():void {
    this.loading.startLoading();
    let addressUrl = 'addresses';
    let openReservationsUrl = 'open-reservations';
    let params = "";
    params += '?min_price=' + this.min_price;
    params += '&max_price=' + this.max_price;
    params += '&min_people=' + this.min_people;
    params += '&max_people=' + this.max_people;
    params += '&min_duration=' + this.min_duration;
    params += '&max_duration=' + this.max_duration;
    params += '&selected_categories=' + this.selected_categories_ids;
    params += '&selected_subcategories=' + this.selected_subcategories_ids;
    if (this.selected_address)
      params += '&selected_address=' + this.selected_address;
    if (this.selected_name)
      params += '&selected_name=' + this.selected_name;
    params += '&page=' + this.actual_page;

    let obGames: Observable<Game[]> = this.apiService.getEntity(addressUrl + params);
    let obReservations: Observable<OpenReservation[]> = this.apiService.getEntity(openReservationsUrl + params);

    obGames.subscribe({
      next: (data) => {
        const games: Game[] = data;
        this.games = games;
        this.loading.stopLoading();
      },
      error: (error) => {
        console.log(error);
        this.loading.stopLoading();
      }
    });

    obReservations.subscribe({
      next: (data) => {
        
        
        const reservations: OpenReservation[] = data;
        console.log(reservations);
        this.openReservations = reservations;
        this.loading.stopLoading();
      },
      error: (error) => {
        console.log(error);
        this.loading.stopLoading();
      }
    });

  }
}
