import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-external-profile',
  templateUrl: './external-profile.component.html',
  styleUrls: ['./external-profile.component.scss']
})
export class ExternalProfileComponent implements OnInit {

  public userId?:number;
  public user?:User;
  public userInterval:any;

  constructor(private apiService:ApiService,
    public loading:LoadingService,
    private route:ActivatedRoute){
      this.userId=+route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.loading.startLoading();
    this.getUserData();
    this.userInterval=setInterval(()=>{
      this.getUserData();
    },2000);
  }

  public getUserData():void{
    this.apiService.getEntity('users',this.userId).subscribe((user:User)=>{
      console.log(user);
      this.user=user;
      this.loading.stopLoading();
    },(error:HttpErrorResponse)=>{
      console.log(error);
      this.loading.stopLoading();
    });
  }

  ngOnDestroy(){
    clearInterval(this.userInterval);
    this.userInterval=null;
  }
}
