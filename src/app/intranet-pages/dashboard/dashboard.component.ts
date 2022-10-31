import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user!:User;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void{
    this.apiService.getEntity('user').subscribe((user:User)=>{
      console.log(user);
    },(error:Error)=>{
      console.log(error);
    });
  }

}
