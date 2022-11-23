import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { GameReview } from 'src/app/models/GameReview';
import { GameReviewData } from 'src/app/models/GameReviewData';
import { ApiService } from 'src/app/services/api.service';
import { AddReviewDialogComponent } from '../../add-review-dialog/add-review-dialog.component';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements AfterContentInit {

  @Input() game!: Game;
  @Output() updateReviewSummary = new EventEmitter<void>();
  @Output() loadMoreReviews = new EventEmitter<void>();

  public actual_reviews_page: number = 1;

  constructor(private route: Router,
    private apiService: ApiService,
    private dialog: MatDialog) { }

  ngAfterContentInit(): void {

  }

  public searchCategory(): void {
    this.route.navigate(['/search'], { queryParams: { c: this.game?.category!.id } });
  }

  round(number: number) {
    return Math.round(number);
  }


  public showAddReviewModal(): void {
    const dialogRef = this.dialog.open(AddReviewDialogComponent, {
      width: '500px',
      data: { game: this.game },
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result)
      this.addReview(result);
    });
  }

  public addReview(gameReview: GameReview): void {
    gameReview.game_id=this.game.id;
    this.apiService.addSubEntity('games', this.game.id!, 'reviews', gameReview).subscribe((gameReview: GameReview) => {
      console.log(gameReview);
      this.updateReviewSummary.emit();
    }, (error: Error) => {
      console.log(error);
    });
  }

}
