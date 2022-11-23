import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, forkJoin, Observable } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { GameReview } from 'src/app/models/GameReview';
import { GameReviewData } from 'src/app/models/GameReviewData';
import { GameReviewSummary } from 'src/app/models/GameReviewSummary';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {

  public gameId?: number;
  public game!: Game;
  public isLoading: boolean = true;
  public actual_reviews_page:number=1;

  constructor(private apiService: ApiService,
    private router: ActivatedRoute) {
    this.gameId = +router.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getGameAndReviewsDataSummary();
  }

  public getGameAndReviewsDataSummary(): void {
    let obGame: Observable<Game> = this.apiService.getEntity('games', this.gameId);
    let obGameReviewsSummary: Observable<GameReviewSummary> = this.apiService.getSubEntity('games', this.gameId!, 'reviews-summary');
    let obGameReviewsData: Observable<GameReviewData> = this.apiService.getSubEntity('games', this.gameId!, 'reviews');
    let requests = [obGame, obGameReviewsSummary,obGameReviewsData];
    this.isLoading = true;
    forkJoin(requests).subscribe({
      next: (data) => {
        this.isLoading = false;
        const game: Game = data[0] as Game;
        const reviewsDataSummary: GameReviewSummary = data[1] as GameReviewSummary;
        const reviewsData: GameReviewData = data[2] as GameReviewData;
        this.game = game;
        this.game.gameReviewSummary = reviewsDataSummary;
        this.game.reviews=reviewsData.data;
        console.log("game", game);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  }

  public getReviewsAndSummary(): void {
    let obGameReviewsData: Observable<GameReviewData> = this.apiService.getSubEntity('games', this.game.id!, 'reviews');
    let obGAmeReviewsSummary: Observable<GameReviewSummary> = this.apiService.getSubEntity('games', this.gameId!, 'reviews-summary');
    let requests = [obGameReviewsData, obGAmeReviewsSummary];
    this.isLoading = true;
    forkJoin(requests).subscribe({
      next: (data) => {
        this.isLoading = false;
        const gameReviewsData: GameReviewData = data[0] as GameReviewData;
        const reviewsData: GameReviewSummary = data[1] as GameReviewSummary;
        this.game.reviews=gameReviewsData.data;
        this.game.gameReviewSummary = reviewsData;
        console.log("game actual", this.game);
        if (this.actual_reviews_page > 1) this.actual_reviews_page -= 1;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  }

  public loadMoreReviews(): void {
    this.actual_reviews_page += 1;
    this.isLoading=true;
    this.apiService.getSubEntity('games', this.game.id!, 'reviews?page=' + this.actual_reviews_page).subscribe((gameReviewData: GameReviewData) => {
      console.log("reviews",gameReviewData);
      let reviews: GameReview[] = gameReviewData.data!;
      this.game.reviews!.push(...reviews);
      this.isLoading=false;
    });
  }

}
