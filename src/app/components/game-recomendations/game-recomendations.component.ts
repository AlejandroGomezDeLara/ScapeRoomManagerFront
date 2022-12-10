import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game-recomendations',
  templateUrl: './game-recomendations.component.html',
  styleUrls: ['./game-recomendations.component.scss']
})
export class GameRecomendationsComponent implements OnInit {

  public recomendations?: Game[];

  constructor(private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.getRecomendations();
  }

  public getRecomendations(): void {
    this.apiService.getEntity('recomendations').subscribe((recomendations: Game[]) => {
      this.recomendations = recomendations;
    });
  }

}
