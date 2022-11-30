import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-game-recomendation-item',
  templateUrl: './game-recomendation-item.component.html',
  styleUrls: ['./game-recomendation-item.component.scss']
})
export class GameRecomendationItemComponent implements OnInit {

  @Input() game?:Game;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public redirectInterior(game_id:number):void{
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['search/'+game_id+'/interior']));
  }

  round(number: number) {
    return Math.round(number);
  }
}
