import { Component, Input, OnInit } from '@angular/core';
import { GameReview } from 'src/app/models/GameReview';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() color?:string;
  @Input() rating?:number;
  @Input() reviews?:GameReview[] | number;

  constructor() { }

  ngOnInit(): void {
  }

  round(number:number) {
    return Math.round(number);
  }



}
