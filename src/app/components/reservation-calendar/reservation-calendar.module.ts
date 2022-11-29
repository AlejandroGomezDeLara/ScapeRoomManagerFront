import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationCalendarComponent } from './reservation-calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCalendarColorDirective } from 'src/app/directives/mat-calendar-color.directive';
import { NewOpenReservationModule } from '../new-open-reservation/new-open-reservation.module';



@NgModule({
  declarations: [
    ReservationCalendarComponent,
    MatCalendarColorDirective
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NewOpenReservationModule
  ],
  exports: [ReservationCalendarComponent]
})
export class ReservationCalendarModule { }
