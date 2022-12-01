import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GameReservationHour } from 'src/app/models/GameReservationHour';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { User } from 'src/app/models/User';
import { ReservationConfirmDialogComponent } from 'src/app/reservation-confirm-dialog/reservation-confirm-dialog.component';
import { ReservationConfirmedDialogComponent } from 'src/app/reservation-confirmed-dialog/reservation-confirmed-dialog.component';
import { ReservationFailedDialogComponent } from 'src/app/reservation-failed-dialog/reservation-failed-dialog.component';

@Component({
  selector: 'app-new-open-reservation',
  templateUrl: './new-open-reservation.component.html',
  styleUrls: ['./new-open-reservation.component.scss']
})
export class NewOpenReservationComponent implements OnInit, OnChanges {

  @Input() game!: Game;
  @Input() hour!: GameReservationHour;
  @Input() date!: Date;

  public people: User[] = [];
  public closed: boolean = false;
  public countdown?: string;
  public timeout: any;
  public target!: Date;
  public target_date_str?: string;
  public actual_date_str?: string;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    clearTimeout(this.timeout);
    this.timeout = null;
    this.setCountDown();
  }

  ngOnInit(): void {
    this.setUsers();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
    this.timeout = null;
  }

  public setUsers(): void {
    for (let index = 0; index < 4; index++) {
      this.people.push(
        { avatar: 'assets/imgs/add-placeholder.png', name: 'Empezar', id: 0 }
      );
    }
  }

  public setCountDown(): void {

    const now = new Date();
    this.actual_date_str = now.toDateString();
    this.target_date_str = this.date.toDateString();

    let addHours = Number(this.hour?.hour?.slice(0, 2));
    let addMinutes = Number(this.hour?.hour?.slice(3, 5));
    let addSeconds = Number(this.hour?.hour?.slice(6))
    this.date.setHours(addHours);
    this.date.setMinutes(addMinutes);
    this.date.setSeconds(addSeconds);

    if (this.date > now) {

      this.target = this.date;

      this.closed = false;

      var delta = Math.abs(this.date.getTime() - now.getTime()) / 1000;

      // calculate (and subtract) whole days
      var days = Math.floor(delta / 86400);

      delta -= days * 86400;

      var horas = Math.floor(delta / 3600) % 24;

      horas += days * 24;

      //RESTAMOS LAS HORAS DE ANTELACION
      if (this.game.reservation_margin_hours) {
        horas -= this.game.reservation_margin_hours;
      }

      var minutos = Math.floor(delta / 60) % 60;
      if (minutos < 0) minutos *= -1;

      var segundos = Math.floor(delta % 60);
      if (segundos < 0) segundos *= -1;

      const m = minutos.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });

      const s = segundos.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });

      if (horas < 0) {
        this.closed = true;
      }

      this.countdown = horas + ':' + m + ':' + s;

    } else {
      this.closed = true;
    }

    console.log(this.countdown);


    this.timeout = setTimeout(() => {
      this.setCountDown();
    }, 1000);



  }


  public openConfirmDialog(): void {
    let reservation: OpenReservation = {
      game_id: this.game.id,
      game_reservation_hour: this.hour,
      date: this.date,
    };
    const dialogRef = this.dialog.open(ReservationConfirmDialogComponent, {
      width: '700px',
      backdropClass: 'backdropBackground',
      data: { game: this.game, openReservation: reservation }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.reservation)
        this.openReservationConfirmedDialog();
        else if (result.error)
        this.handleError(result.error);
    });
  }

  public openReservationConfirmedDialog(): void {
    const dialogRef = this.dialog.open(ReservationConfirmedDialogComponent, {
      width: '500px',
      backdropClass: 'backdropBackground',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      location.reload();
    });
  }

  public openReservationFailedDialog(error: HttpErrorResponse): void {
    const dialogRef = this.dialog.open(ReservationFailedDialogComponent, {
      width: '500px',
      backdropClass: 'backdropBackground',
      data: { error: error }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      location.reload();
    });
  }

  public handleError(error: HttpErrorResponse): void {
    if (error.status == 401) {
      this.router.navigate(['/login']);
    } else {
      this.openReservationFailedDialog(error);
    }
  }


}
