import { Component, Input, OnInit } from '@angular/core';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-open-reservation',
  templateUrl: './open-reservation.component.html',
  styleUrls: ['./open-reservation.component.scss']
})
export class OpenReservationComponent implements OnInit {

  @Input() reservation!:OpenReservation;
  public people:User[]=[];

  constructor() { }

  ngOnInit(): void {
    this.reservation.active=true;
    this.setUsers();
    this.setCountDown();
  }


  public setCountDown():void{
    const target=new Date(this.reservation.date!);
    setInterval(() => {
      
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const horas = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      const segundos = Math.floor((difference % (1000 * 60)) / 1000);

      if(horas <0 || minutos < 0 || segundos <0)
      this.reservation.active=false;

      const m=minutos.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });

      const s=segundos.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });

      this.reservation.countdown=horas+':'+m+':'+s;
      
    },1000);
  }

  public setUsers():void{
    this.people.push(
      {avatar:'assets/imgs/add-placeholder.png',name:'Unirse'}
    );
    this.people.push(
      {avatar:'assets/imgs/add-placeholder.png',name:'Unirse'}
    );
    this.people.push(
      {avatar:'assets/imgs/add-placeholder.png',name:'Unirse'}
    );
    this.people.push(
      {avatar:'assets/imgs/add-placeholder.png',name:'Unirse'}
    );
    this.reservation.users?.forEach((user,index)=>{
      if(index<=2){
        this.people[index]=user;
        if(index ==2){
          if(this.reservation.users?.length!=3){
            this.people[index]={avatar:'assets/imgs/group-placeholder.webp',name:'y '+(this.reservation.users?.length!-2)+' más'}
          }
        }
      }
    })
  }

}
