import { AfterContentInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GamePrice } from 'src/app/models/GamePrice';
import { GameReservationHour } from 'src/app/models/GameReservationHour';
import { GameReview } from 'src/app/models/GameReview';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { ApiService } from 'src/app/services/api.service';
import { AddReviewDialogComponent } from '../../add-review-dialog/add-review-dialog.component';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements AfterContentInit {

  @Input() game!: Game;
  @Input() openReservations: OpenReservation[] = [];

  @Output() updateReviewSummary = new EventEmitter<void>();
  @Output() loadMoreReviews = new EventEmitter<void>();

 

  public actual_reviews_page: number = 1;

  constructor(private route: Router,
    private apiService: ApiService,
    private dialog: MatDialog) { }

  ngAfterContentInit(): void {
    this.checkGameClosed();
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
      if (result)
        this.addReview(result);
    });
  }

  public addReview(gameReview: GameReview): void {
    gameReview.game_id = this.game.id;
    this.apiService.addSubEntity('games', this.game.id!, 'reviews', gameReview).subscribe((gameReview: GameReview) => {
      console.log(gameReview);
      this.updateReviewSummary.emit();
    }, (error: Error) => {
      console.log(error);
    });
  }

  public checkGameClosed(): void {
    const now = new Date();
    const day = now.getDay();

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (this.game.schedule) {
      let opening_time = this.game.schedule.find(x => x.day == day).opening_time;
      let closing_time = this.game.schedule.find(x => x.day == day).closing_time;
      let actualHour = hour + ':' + minutes + ':' + seconds;
      if (actualHour > opening_time && actualHour < closing_time) {
        this.game.closed = false;
      } else {
        this.game.closed = true;
      }
      console.log(this.game.closed);
    }
  }

  

}
