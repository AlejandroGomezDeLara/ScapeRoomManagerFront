import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenReservationSmallComponent } from './open-reservation-small.component';



@NgModule({
  declarations: [OpenReservationSmallComponent],
  imports: [
    CommonModule
  ],
  exports:[OpenReservationSmallComponent]
})
export class OpenReservationSmallModule { }
