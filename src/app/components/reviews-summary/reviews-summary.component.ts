import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-reviews-summary',
  templateUrl: './reviews-summary.component.html',
  styleUrls: ['./reviews-summary.component.scss']
})
export class ReviewsSummaryComponent implements OnInit {
  
  @Input() game!:Game;
  
  constructor() { }

  ngOnInit(): void {
  }

  round(number: number) {
    return Math.round(number);
  }
}
