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
