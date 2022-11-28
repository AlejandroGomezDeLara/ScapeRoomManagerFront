import { Component, Input, OnInit } from '@angular/core';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-open-reservation',
  templateUrl: './open-reservation.component.html',
  styleUrls: ['./open-reservation.component.scss']
})
export class OpenReservationComponent implements OnInit {

  @Input() reservation?: OpenReservation;
  public people: User[] = [];
  public target!: Date;
  public timeout: any;

  constructor() { }

  ngOnInit(): void {
    this.setUsers();
    this.target = new Date(this.reservation?.date!);
    if(this.reservation?.game_reservation_hour){
      let hour = Number(this.reservation?.game_reservation_hour?.hour?.slice(0, 2));    
      let minutes = Number(this.reservation?.game_reservation_hour?.hour?.slice(3, 5));
      let seconds = Number(this.reservation?.game_reservation_hour?.hour?.slice(6))
      this.target.setHours(hour);
      this.target.setMinutes(minutes);
      this.target.setSeconds(seconds); 
    }
    
    this.setCountDown();
  }


  public setCountDown(): void {
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

  public setUsers(): void {
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
