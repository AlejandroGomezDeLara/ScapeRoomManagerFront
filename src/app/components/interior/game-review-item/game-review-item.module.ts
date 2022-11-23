import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameReviewItemComponent } from './game-review-item.component';



@NgModule({
  declarations: [GameReviewItemComponent],
  imports: [
    CommonModule
  ],
  exports:[GameReviewItemComponent]
})
export class GameReviewItemModule { }
