import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameReviewsComponent } from './game-reviews.component';
import { GameReviewItemModule } from '../game-review-item/game-review-item.module';



@NgModule({
  declarations: [GameReviewsComponent],
  imports: [
    CommonModule,
    GameReviewItemModule
  ],
  exports:[GameReviewsComponent]
})
export class GameReviewsModule { }
