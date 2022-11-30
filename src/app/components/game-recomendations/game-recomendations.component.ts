import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-game-recomendations',
  templateUrl: './game-recomendations.component.html',
  styleUrls: ['./game-recomendations.component.scss']
})
export class GameRecomendationsComponent implements OnInit {

  @Input() recomendations?:Game[];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 
}
