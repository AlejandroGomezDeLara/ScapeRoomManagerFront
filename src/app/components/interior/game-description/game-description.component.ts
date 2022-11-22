import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit {

  @Input() game!:Game; 

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  public searchCategory(): void {
    console.log("xd");
    
    this.route.navigate(['/search'], { queryParams: { c: this.game?.category!.id} });
  }

  round(number: number) {
    return Math.round(number);
  }

}
