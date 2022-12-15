import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RankingData } from 'src/app/models/RankingData';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {


  public users:User[]=[];

  constructor(private apiService:ApiService){

  }

  ngOnInit(): void {
    this.getRanking();
  }

  public getRanking():void{
    this.apiService.getEntity('ranking').subscribe((res:RankingData)=>{
      this.users=res.data!;
      console.log(this.users);
    },(error:HttpErrorResponse)=>{
      console.log(error);
    });
  }

}
