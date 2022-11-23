import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getReviewsData();
  }

  public getReviewsData():void{
    this.apiService.getSubEntity('games',this.game.id!,'reviews-summary').subscribe((gameReviewSummary:GameReviewSummary)=>{
      this.game.gameReviewSummary=gameReviewSummary;
    });
  }
}
