import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RankingData } from 'src/app/models/RankingData';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {


  public users:User[]=[];

  public rankingInterval:any;

  constructor(private apiService:ApiService,
    public loading:LoadingService){

  }

  ngOnInit(): void {
    this.loading.startLoading();
    this.getRanking();
    this.rankingInterval=setInterval(()=>{
      this.getRanking();
    },4000);
  }

  public getRanking():void{
    this.apiService.getEntity('ranking').subscribe((res:RankingData)=>{
      this.users=res.data!;
      console.log(this.users);
      this.loading.stopLoading();
    },(error:HttpErrorResponse)=>{
      console.log(error);
      this.loading.stopLoading();
    });
  }

  ngOnDestroy():void{
    clearInterval(this.rankingInterval);
    this.rankingInterval=null;
  }

}
