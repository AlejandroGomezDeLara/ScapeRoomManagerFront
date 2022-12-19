import { Component, Input, OnInit } from '@angular/core';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-open-reservation',
  templateUrl: './open-reservation.component.html',
  styleUrls: ['./open-reservation.component.scss']
})
export class OpenReservationComponent implements OnInit {

  @Input() reservation!: OpenReservation;
  @Input() joined: boolean=false;

  public people: User[] = [];
  public target!: Date;
  public timeout: any;

  public target_date_str?: string;
  public actual_date_str?: string;

  constructor() { }

  ngOnInit(): void {
    this.setUsers();
    /* this.target = new Date(this.reservation?.date!);
    if(this.reservation?.game_reservation_hour){
      let hour = Number(this.reservation?.game_reservation_hour?.hour?.slice(0, 2));    
      let minutes = Number(this.reservation?.game_reservation_hour?.hour?.slice(3, 5));
      let seconds = Number(this.reservation?.game_reservation_hour?.hour?.slice(6))
      this.target.setHours(hour);
      this.target.setMinutes(minutes);
      this.target.setSeconds(seconds); 
    } */
    
    this.setCountDown();
  }


  /* public setCountDown(): void {
    const now = new Date();
    const difference = this.target.getTime() - now.getTime();

    const horas = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )-1;

    
    const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((difference % (1000 * 60)) / 1000);

    if (horas < 0 || minutos < 0 || segundos < 0)
      this.reservation!.closed = true;

    const m = minutos.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });

    const s = segundos.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });

    this.reservation!.countdown = horas + ':' + m + ':' + s;
    
    this.timeout = setTimeout(() => {
      this.setCountDown();
    }, 1000);
  }
 */


  public setCountDown(): void {

    const now = new Date();
    this.actual_date_str = now.toDateString();
    let reservation_date=new Date(this.reservation.date!);
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

      horas += days * 60;

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
    if(!this.joined){
      this.people.push(
        { avatar: 'assets/imgs/add-placeholder.png', name: 'Unirse' }
      );
      this.people.push(
        { avatar: 'assets/imgs/add-placeholder.png', name: 'Unirse' }
      );
      this.people.push(
        { avatar: 'assets/imgs/add-placeholder.png', name: 'Unirse' }
      );
      this.people.push(
        { avatar: 'assets/imgs/add-placeholder.png', name: 'Unirse' }
      );
    }
    
    this.reservation?.users?.forEach((user, index) => {
      if (index <= 2) {
        this.people[index] = user;
        if (index == 2) {
          if (this.reservation?.users?.length != 3) {
            this.people[index] = { avatar: 'assets/imgs/group-placeholder.webp', name: 'y ' + (this.reservation?.users?.length! - 2) + ' más' }
          }
        }
      }
    })
  }

  public ngOnDestroy(): void {
    clearInterval(this.timeout);
  }
}
