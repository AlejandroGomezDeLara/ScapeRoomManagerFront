import { Component, Input, OnInit } from '@angular/core';
import { GameReview } from 'src/app/models/GameReview';

@Component({
  selector: 'app-game-review-item',
  templateUrl: './game-review-item.component.html',
  styleUrls: ['./game-review-item.component.scss']
})
export class GameReviewItemComponent implements OnInit {

  @Input() review!:GameReview;
  @Input() color!:string;

  constructor() { }

  ngOnInit(): void {
  }

  round(number: number) {
    return Math.round(number);
  }

}
