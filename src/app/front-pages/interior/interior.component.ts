import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { GameReservationHour } from 'src/app/models/GameReservationHour';
import { GameReview } from 'src/app/models/GameReview';
import { GameReviewData } from 'src/app/models/GameReviewData';
import { GameReviewSummary } from 'src/app/models/GameReviewSummary';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {

  public gameId?: number;
  public game!: Game;
  public openReservations: OpenReservation[] = [];
  public actual_reviews_page: number = 1;

  constructor(private apiService: ApiService,
    private router: ActivatedRoute,
    public loading:LoadingService) {
    this.gameId = +router.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getGameAndReviewsDataSummaryAndOpenReservations();
  }

  public getGameAndReviewsDataSummaryAndOpenReservations(): void {
    this.loading.startLoading();
    
    let obGame: Observable<Game> = this.apiService.getEntity('games', this.gameId).pipe(map((res) => res), catchError(e => of('FALLO GAME!')));
    let obGameReviewsSummary: Observable<GameReviewSummary> = this.apiService.getSubEntity('games', this.gameId!, 'reviews-summary').pipe(map((res) => res), catchError(e => of('FALLO SUMARY!')));
    let obGameReviewsData: Observable<GameReviewData> = this.apiService.getSubEntity('games', this.gameId!, 'reviews').pipe(map((res) => res), catchError(e => of('FALLO REVIEWS!')));
    let obReservations: Observable<OpenReservation[]> = this.apiService.getSubEntity('games', this.gameId!, 'open-reservations').pipe(map((res) => res), catchError(e => of('FALLO RESERVATION!')));
    let obReservationHours: Observable<GameReservationHour[]> = this.apiService.getSubEntity('games', this.gameId!, 'reservation-hours').pipe(map((res) => res), catchError(e => of('FALLO HOURS!')));

    let requests = [obGame, obGameReviewsSummary, obGameReviewsData, obReservations,obReservationHours];
    
    forkJoin(requests).subscribe({
      next: (data) => {
        this.loading.stopLoading();
        const game: Game = data[0] as Game;
        const reviewsDataSummary: GameReviewSummary = data[1] as GameReviewSummary;
        const reviewsData: GameReviewData = data[2] as GameReviewData;
        const openReservations: OpenReservation[] = data[3] as OpenReservation[];
        const gameReservationHours: GameReservationHour[] = data[4] as GameReservationHour[];
        
        this.game = game;
        this.game.gameReviewSummary = reviewsDataSummary;
        this.game.reviews = reviewsData.data;
        this.openReservations = openReservations;
        this.game.reservation_hours=gameReservationHours;
        console.log("game", game);
      },
      error: (error) => {
        console.log(error);
        this.loading.stopLoading();
      }
    });
  }

  public getObservableByUrl<T>(url:string):Observable<T>{
    return this.apiService.getEntity(url).pipe(map((res) => res), catchError(e => of('F!')));
  }

  public getReviewsAndSummary(): void {
    let obGameReviewsData: Observable<GameReviewData> = this.apiService.getSubEntity('games', this.game.id!, 'reviews');
    let obGAmeReviewsSummary: Observable<GameReviewSummary> = this.apiService.getSubEntity('games', this.gameId!, 'reviews-summary');
    let requests = [obGameReviewsData, obGAmeReviewsSummary];
    this.loading.startLoading();
    forkJoin(requests).subscribe({
      next: (data) => {
        this.loading.stopLoading();
        const gameReviewsData: GameReviewData = data[0] as GameReviewData;
        const reviewsData: GameReviewSummary = data[1] as GameReviewSummary;
        this.game.reviews = gameReviewsData.data;
        this.game.gameReviewSummary = reviewsData;
        console.log("game actual", this.game);
        if (this.actual_reviews_page > 1) this.actual_reviews_page -= 1;
      },
      error: (error) => {
        console.log(error);
        this.loading.stopLoading();
      }
    });
  }

  public loadMoreReviews(): void {
    this.actual_reviews_page += 1;
    this.loading.startLoading();
    this.apiService.getSubEntity('games', this.game.id!, 'reviews?page=' + this.actual_reviews_page).subscribe((gameReviewData: GameReviewData) => {
      console.log("reviews", gameReviewData);
      let reviews: GameReview[] = gameReviewData.data!;
      this.game.reviews!.push(...reviews);
      this.loading.stopLoading();
    });
  }

}
