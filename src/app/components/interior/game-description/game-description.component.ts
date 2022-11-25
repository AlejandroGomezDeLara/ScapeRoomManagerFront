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

  public day_selected: Date | null = null;
  public price_selected:GamePrice | null =null;
  public hour_selected:GameReservationHour | null =null;

  public disponible_hours:GameReservationHour[] | undefined=[];
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

  dateFilter = (d: Date): boolean => {
    let today: Date = new Date();
    let todaystr:Date=new Date(Date.UTC(today.getFullYear(),today.getMonth(), today.getDate()));
    let calendarstr:Date=new Date(Date.UTC(d.getFullYear(),d.getMonth(), d.getDate()));
    console.log("TODAY",todaystr);
    console.log("CALENDARY",calendarstr);
    let disponible_hours=this.game.reservation_hours?.filter(x=>x.day == d.getDay());
    return calendarstr.getTime() >= todaystr.getTime() && disponible_hours?.length!>0;
  }

  public changeDate(date:any):void{
    this.day_selected=date;
    this.disponible_hours=this.game.reservation_hours?.filter(x=>x.day == date.getDay());
    this.price_selected=null;
    this.hour_selected=null;
    console.log(this.game.reservation_hours);
  }

  public selectHour(hour:GameReservationHour){
    this.hour_selected=hour;
    console.log("Hora seleccionada",this.hour_selected);
    
  }

  public selectPrice(price:GamePrice){
    this.price_selected=price;
    console.log("Precio seleccionad0",this.price_selected);

  }

}
