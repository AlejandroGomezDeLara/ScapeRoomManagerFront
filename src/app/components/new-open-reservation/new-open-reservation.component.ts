import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameReservationHour } from 'src/app/models/GameReservationHour';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-new-open-reservation',
  templateUrl: './new-open-reservation.component.html',
  styleUrls: ['./new-open-reservation.component.scss']
})
export class NewOpenReservationComponent implements OnInit {

  @Input() game!: Game;
  @Input() hour!: GameReservationHour;
  public people: User[] = [];
  public closed:boolean=false;
  public countdown?:string;
  public timeout: any;
  public target!: Date;

  constructor() { }

  ngOnInit(): void {
    this.target = new Date();
    let hour = Number(this.hour?.hour?.slice(0, 2));
    let minutes = Number(this.hour?.hour?.slice(3, 5));
    let seconds = Number(this.hour?.hour?.slice(6))
    this.target.setHours(hour);
    this.target.setMinutes(minutes);
    this.target.setSeconds(seconds);
    this.setCountDown();
    this.setUsers();
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
    const difference = this.target.getTime() - now.getTime();

    const horas = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ) - 1;


    const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((difference % (1000 * 60)) / 1000);

    if (horas < 0 || minutos < 0 || segundos < 0)
      this.closed = true;

    const m = minutos.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });

    const s = segundos.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });

    this.countdown = horas + ':' + m + ':' + s;

    console.log(this.countdown);

    this.timeout = setTimeout(() => {
      this.setCountDown();
    }, 1000);
  }

}
