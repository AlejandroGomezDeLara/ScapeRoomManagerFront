import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { debounceTime, delay, filter, forkJoin, map, Observable, tap } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { GameCategory } from 'src/app/models/GameCategory';
import { GameData } from 'src/app/models/GameData';
import { GameSubcategory } from 'src/app/models/GameSubcategory';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public isLoading: boolean = true;
  public selected_address: string = '';
  public selected_name: string = '';
  public filteredGames: Game[] = [];
  public regionFilteredGames: Game[] = [];
  public games: Game[] = [];
  public openReservations: OpenReservation[] = [];
  //game filtros
  min_price?: number;
  max_price?: number;
  min_people?: number;
  max_people?: number;
  min_duration?: number;
  max_duration?: number;
  selected_categories_ids?: [number];
  selected_subcategories_ids?: [number];
  selected_categories: GameCategory[] = [];
  selected_subcategories: GameSubcategory[] = [];
  actual_page?: number = 1;
  total_game_pages?: number;
  total_games?: number;



  constructor(private apiService: ApiService,
    private ngZone: NgZone,
    private router: ActivatedRoute) { 
      
    }


  ngOnInit(): void {

  }


  public removeAddress(): void {
    this.filteredGames = [...this.games];
  }


  public filterByNameAndAddress(filters: [string, string]): void {
    this.ngZone.run(() => {
      this.selected_address = filters[0];
      this.selected_name = filters[1];
      this.actual_page = 1;
      this.setGamesAndOpenReservations();

    });

  }



  public applyFilters(filters: any): void {
    console.log("FILTROS", filters);
    this.ngZone.run(() => {
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

      this.setGamesAndOpenReservations();

    })

  }

  public changeGamesPage(event: number): void {
    this.actual_page = event;
    this.setGamesAndOpenReservations();
  }

  public setGamesAndOpenReservations():void{

    this.getGamesAndOpenReservations().subscribe({
      next: (data) => {

        const gameData: GameData = data[0] as GameData;
        const openReservations: OpenReservation[] = data[1] as OpenReservation[];

        this.games = gameData.data!;
        this.total_games=gameData.total;   
        this.total_game_pages=gameData.last_page;           
        this.filteredGames=[...gameData.data!];
        this.isLoading=false;
        this.openReservations = openReservations;

        this.isLoading = false;
        console.log("GAMES AND RESERVATIONS", data);
      },
      error: (error) => {
        console.log(error);
        this.isLoading=false;
      }
    });

  }


  public getGamesAndOpenReservations(): Observable<(GameData | OpenReservation[])[]> {
    let gamesUrl = 'games';
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

    let obGames: Observable<GameData> = this.apiService.getEntity(gamesUrl + params);
    let obReservations: Observable<OpenReservation[]> = this.apiService.getEntity(openReservationsUrl + params);
    let requests = [obGames, obReservations];

    return forkJoin(requests);
  }
}
