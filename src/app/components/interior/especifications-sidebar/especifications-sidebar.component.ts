import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GameReviewSummary } from 'src/app/models/GameReviewSummary';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-especifications-sidebar',
  templateUrl: './especifications-sidebar.component.html',
  styleUrls: ['./especifications-sidebar.component.scss']
})
export class EspecificationsSidebarComponent implements OnInit {

  @Input() game!:Game; 
  public recomendations:Game[]=[];
  
  constructor(private apiService:ApiService,
    private router:Router) { }

  ngOnInit(): void {
    this.getRecomendations();
  }

  round(number: number) {
    return Math.round(number);
  }

  public getRecomendations():void{
    this.apiService.getEntity('recomendations').subscribe((recomendations:Game[])=>{
      this.recomendations=recomendations;
    });
  }

  public redirectInterior(game_id:number):void{
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['search/'+game_id+'/interior']));
  }
}
