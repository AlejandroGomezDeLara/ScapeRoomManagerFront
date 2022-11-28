import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOpenReservationComponent } from './new-open-reservation.component';



@NgModule({
  declarations: [NewOpenReservationComponent],
  imports: [
    CommonModule
  ],
  exports:[NewOpenReservationComponent]
})
export class NewOpenReservationModule { }
