import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenReservationComponent } from './open-reservation.component';
import { RatingModule } from '../rating/rating.module';



@NgModule({
  declarations: [OpenReservationComponent],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports:[OpenReservationComponent]
})
export class OpenReservationModule { }
