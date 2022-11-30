import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRecomendationItemComponent } from './game-recomendation-item.component';
import { RatingModule } from '../game-list/rating/rating.module';



@NgModule({
  declarations: [GameRecomendationItemComponent],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports:[GameRecomendationItemComponent]
})
export class GameRecomendationItemModule { }
