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
    this.setPercentajes();
  }

  round(number: number) {
    return Math.round(number);
  }

  setPercentajes():void{
    if(this.summary){
      let total=this.summary.reviewsCount;
      this.summary.fiveStarsPercentage=(this.summary.fiveStars/total)*100;
      this.summary.fourStarsPercentage=(this.summary.fourStars/total)*100;
      this.summary.threeStarsPercentage=(this.summary.threeStars/total)*100;
      this.summary.twoStarsPercentage=(this.summary.twoStars/total)*100;
      this.summary.oneStarsPercentage=(this.summary.oneStars/total)*100;
    }
  }
 
}
