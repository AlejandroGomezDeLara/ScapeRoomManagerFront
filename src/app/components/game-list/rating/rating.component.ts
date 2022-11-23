import { Component, Input, OnInit } from '@angular/core';
import { GameReview } from 'src/app/models/GameReview';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() color?:string;
  @Input() rating:number=0;
  @Input() reviews:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  round(number:number) {
    return Math.round(number);
  }



}
