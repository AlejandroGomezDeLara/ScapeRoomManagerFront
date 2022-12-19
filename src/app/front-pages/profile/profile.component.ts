import { HttpErrorResponse } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingService } from 'src/app/services/loading.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit,AfterContentInit {

  public user!:User;
  public openReservations:OpenReservation[]=[];

  constructor(private auth:AuthenticationService,
    public utilities:UtilitiesService,
    private loading:LoadingService,
    private apiService:ApiService) { }

  ngAfterContentInit(): void {
    this.user=this.auth.getStorageUser();
  }

  ngOnInit(): void {
    this.auth.userChanges.subscribe((user:User)=>{
      this.user=user;
      console.log("usuario actualizado",user);
    });
    this.getUserOpenReservations();
  }

  public getUserOpenReservations():void{
    this.apiService.getEntity('user-open-reservations',this.user.id).subscribe((reservations:OpenReservation[])=>{
      this.openReservations=reservations;
      console.log(reservations);
    },(error:HttpErrorResponse)=>{
      console.log(error);
    });
  }


  public logout():void{
    this.auth.logout();
  }

}
