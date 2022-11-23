import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-game-reviews',
  templateUrl: './game-reviews.component.html',
  styleUrls: ['./game-reviews.component.scss']
})
export class GameReviewsComponent implements OnInit {

  @Input() game!: Game;
  @Output() loadMoreReviews = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  
}
