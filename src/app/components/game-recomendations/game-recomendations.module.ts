import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRecomendationsComponent } from './game-recomendations.component';
import { RatingModule } from '../game-list/rating/rating.module';
import { GameRecomendationItemModule } from '../game-recomendation-item/game-recomendation-item.module';



@NgModule({
  declarations: [GameRecomendationsComponent],
  imports: [
    CommonModule,
    RatingModule,
    GameRecomendationItemModule,
  ],
  exports:[GameRecomendationsComponent]
})
export class GameRecomendationsModule { }
