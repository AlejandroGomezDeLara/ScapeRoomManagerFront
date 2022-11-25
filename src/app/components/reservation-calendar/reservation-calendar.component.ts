import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamePrice } from 'src/app/models/GamePrice';
import { GameReservationHour } from 'src/app/models/GameReservationHour';
import { Reservation } from 'src/app/models/Reservation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrls: ['./reservation-calendar.component.scss']
})
export class ReservationCalendarComponent implements OnInit {

  @Input() game!: Game;
  public day_selected: Date | null = null;
  public price_selected: GamePrice | null = null;
  public hour_selected: GameReservationHour | null = null;
  public disponible_hours: GameReservationHour[] | undefined = [];


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  dateFilter = (d: Date): boolean => {
    let today: Date = new Date();
    let todaystr: Date = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    let calendarstr: Date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    console.log("TODAY", todaystr);
    console.log("CALENDARY", calendarstr);
    let disponible_hours = this.game.reservation_hours?.filter(x => x.day == d.getDay());
    return calendarstr.getTime() >= todaystr.getTime() && disponible_hours?.length! > 0;
  }

  public changeDate(date: any): void {
    this.day_selected = date;
    this.disponible_hours = this.game.reservation_hours?.filter(x => x.day == date.getDay());
    this.price_selected = null;
    this.hour_selected = null;
    console.log(this.game.reservation_hours);
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
    let reservation: Reservation = {
      date: this.day_selected!,
      people:this.price_selected?.people,
      game_reservation_hour_id: this.hour_selected!.id,
      game_price_id: this.price_selected!.id,
      game_id: this.game!.id
    }

    this.apiService.addEntity('reservations', reservation).subscribe((res: Reservation) => {
      console.log(res);
      location.reload();
    }, (error: Error) => {
      console.log(error);
    });
  }

}
