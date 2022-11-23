import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameReview } from 'src/app/models/GameReview';
import { GameReviewSummary } from 'src/app/models/GameReviewSummary';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reviews-summary',
  templateUrl: './reviews-summary.component.html',
  styleUrls: ['./reviews-summary.component.scss']
})
export class ReviewsSummaryComponent implements OnInit {
  
  @Input() color!:string;
  @Input() summary?:GameReviewSummary;
  

  constructor() { }

  ngOnInit(): void {
  }

  round(number: number) {
    return Math.round(number);
  }

 
}
