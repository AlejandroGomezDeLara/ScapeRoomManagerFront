import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamePrice } from 'src/app/models/GamePrice';
import { GameReservationHour } from 'src/app/models/GameReservationHour';
import { Reservation } from 'src/app/models/Reservation';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrls: ['./reservation-calendar.component.scss']
})
export class ReservationCalendarComponent implements OnInit {

  @Input() game?: Game;
  public day_selected: Date | null = null;
  public price_selected: GamePrice | null = null;
  public hour_selected: GameReservationHour | null = null;
  public disponible_hours: GameReservationHour[] | undefined = [];


  constructor(private apiService: ApiService,
    private loading: LoadingService) { }

  ngOnInit(): void {
  }

  dateFilter = (d: Date): boolean => {
    let today: Date = new Date();
    let todaystr: Date = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    let calendarstr: Date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

    let disponible_hours = this.game?.reservation_hours?.filter(x => x.day == d.getDay());
    return calendarstr.getTime() >= todaystr.getTime() && disponible_hours?.length! > 0;
  }

  public changeDate(date: any): void {
    this.day_selected = date;
    this.disponible_hours = this.game?.reservation_hours?.filter(x => x.day == date.getDay());
    let selected_date = date.toDateString()
    this.disponible_hours = this.disponible_hours!.map(x => {
      if (x.open_reservation?.length! > 0) {
        let date = new Date(x.open_reservation![0].date!);
        let reservation_date = date!.toDateString();
        if (reservation_date == selected_date)
          x.closed = true;
        else
          x.closed = false;
      }
      if (x.reservation?.length! > 0) {
        let date = new Date(x.reservation![0].date!);
        let reservation_date = date!.toDateString();
        console.log("RRES", reservation_date);

        if (reservation_date == selected_date)
          x.closed = true;
        else
          x.closed = false;
      }
      return x;
    });
    this.price_selected = null;
    this.hour_selected = null;
    console.log("dayt", this.disponible_hours);
  }

  public selectHour(hour: GameReservationHour) {
    this.hour_selected = hour;
    console.log("Hora seleccionada", this.hour_selected);

  }

  public selectPrice(price: GamePrice) {
    this.price_selected = price;
    console.log("Precio seleccionad0", this.price_selected);

  }

  public createReservation(): void {
    this.loading.startLoading();
    let reservation: Reservation = {
      date: this.day_selected!.toDateString(),
      people: this.price_selected?.people,
      game_reservation_hour_id: this.hour_selected!.id,
      game_price_id: this.price_selected!.id,
      game_id: this.game!.id
    }
    
    this.apiService.addEntity('reservations', reservation).subscribe((res: Reservation) => {
      console.log(res);
      this.loading.stopLoading();
    }, (error: Error) => {
      console.log(error);
    });
  }

}
