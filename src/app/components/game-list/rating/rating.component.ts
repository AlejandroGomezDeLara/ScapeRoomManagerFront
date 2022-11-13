import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() color?:string;
  @Input() reviews?:number;
  @Input() rating!:number;

  constructor() { }

  ngOnInit(): void {
  }

  round(number:number) {
    return Math.round(number);
  }
}
