import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {

  public gameId?: number;
  public game?: Game;
  public isLoading: boolean = true;

  constructor(private apiService: ApiService,
    private router: ActivatedRoute) {
    this.gameId = +router.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getGame();
  }

  public getGame(): void {
    this.apiService.getEntity('games', this.gameId).subscribe((game: Game) => {
      console.log(game);
      this.game = game;
      this.isLoading = false;
    }, (error: Error) => {
      console.log(error);
      this.isLoading = false;
    });
  }

 

  
}
