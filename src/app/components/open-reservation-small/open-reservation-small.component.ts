import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { User } from 'src/app/models/User';
import { ReservationConfirmDialogComponent } from 'src/app/reservation-confirm-dialog/reservation-confirm-dialog.component';
import { ReservationConfirmedDialogComponent } from 'src/app/reservation-confirmed-dialog/reservation-confirmed-dialog.component';
import { ReservationFailedDialogComponent } from 'src/app/reservation-failed-dialog/reservation-failed-dialog.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-open-reservation-small',
  templateUrl: './open-reservation-small.component.html',
  styleUrls: ['./open-reservation-small.component.scss']
})
export class OpenReservationSmallComponent implements OnInit {

  @Input() reservation!: OpenReservation;
  @Input() game!: Game;
  public people: User[] = [];
  public target!: Date;
  public timeout: any;
  public target_date_str?: string;
  public actual_date_str?: string;


  constructor(private apiService: ApiService,
    private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.target = new Date(this.reservation.date!);
    this.setCountDown();
    this.setUsers();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
    this.timeout = null;
  }


  public setCountDown(): void {

    const now = new Date();
    this.actual_date_str = now.toDateString();
    let reservation_date = new Date(this.reservation.date!);
    this.target_date_str = reservation_date.toDateString();

    let addHours = Number(this.reservation.game_reservation_hour?.hour!.slice(0, 2));
    let addMinutes = Number(this.reservation.game_reservation_hour?.hour!.slice(3, 5));
    let addSeconds = Number(this.reservation.game_reservation_hour?.hour!.slice(6))
    reservation_date.setHours(addHours);
    reservation_date.setMinutes(addMinutes);
    reservation_date.setSeconds(addSeconds);

    if (reservation_date > now) {


      this.reservation.closed = false;

      var delta = Math.abs(reservation_date.getTime() - now.getTime()) / 1000;

      // calculate (and subtract) whole days
      var days = Math.floor(delta / 86400);

      delta -= days * 86400;

      var horas = Math.floor(delta / 3600) % 24;

      horas += days * 24;

      //RESTAMOS LAS HORAS DE ANTELACION
      if (this.reservation.game!.reservation_margin_hours) {
        horas -= this.reservation.game!.reservation_margin_hours;
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
        this.reservation.closed = true;
      }

      this.reservation.countdown = horas + ':' + m + ':' + s;

    } else {
      this.reservation.closed = true;
    }


    this.timeout = setTimeout(() => {
      this.setCountDown();
    }, 1000);



  }

  public setUsers(): void {
    for (let index = 0; index < 4; index++) {
      this.people.push(
        { avatar: 'assets/imgs/add-placeholder.png', name: this.reservation.closed ? 'Cerrado' : 'Unirse', id: 0 }
      );
    }

    this.reservation.users?.forEach((user, index) => {
      if (index <= 2) {
        this.people[index] = user;
        if (index == 2) {
          if (this.reservation.users?.length != 3) {
            this.people[index] = { avatar: 'assets/imgs/group-placeholder.webp', name: 'y ' + (this.reservation.users?.length! - 2) + ' más' }
          }
        }
      }
    })
  }

  public openConfirmDialog(): void {

    const dialogRef = this.dialog.open(ReservationConfirmDialogComponent, {
      width: '700px',
      backdropClass: 'backdropBackground',
      data: { game: this.game, openReservation: this.reservation }
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
    });
  }

  public handleError(error: HttpErrorResponse): void {
    
    if (error.status == 401) {
      console.log("NO USER");
      
      this.router.navigate(['/login']);
    } else {
      this.openReservationFailedDialog(error);
    }
  }

}
