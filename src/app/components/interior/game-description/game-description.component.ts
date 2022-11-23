import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GameReview } from 'src/app/models/GameReview';
import { GameReviewData } from 'src/app/models/GameReviewData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit {

  @Input() game!:Game; 
  public actual_reviews_page: number = 1;

  constructor(private route:Router,
    private apiService:ApiService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  public searchCategory(): void {
    this.route.navigate(['/search'], { queryParams: { c: this.game?.category!.id} });
  }

  round(number: number) {
    return Math.round(number);
  }

  public getReviews(): void {
    this.apiService.getSubEntity('games', this.game.id!, 'reviews').subscribe((gameReviewData: GameReviewData) => {
      console.log(gameReviewData);
      this.game.reviews = gameReviewData.data;
    });
  }

  public loadMoreReviews(): void {
    this.actual_reviews_page+=1;
    this.apiService.getSubEntity('games', this.game.id!, 'reviews?page='+this.actual_reviews_page).subscribe((gameReviewData: GameReviewData) => {
      console.log(gameReviewData);
      let reviews:GameReview[]=gameReviewData.data!;
      this.game.reviews!.push(...reviews);
    });
  }

  



}
