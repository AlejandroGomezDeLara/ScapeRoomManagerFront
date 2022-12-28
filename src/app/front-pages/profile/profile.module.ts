import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { OpenReservationModule } from 'src/app/components/game-list/open-reservation/open-reservation.module';
import { RatingModule } from 'src/app/components/game-list/rating/rating.module';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  { 
    path:'',
    component:ProfileComponent
  }
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OpenReservationModule,
    RatingModule,
    FormsModule,
    HomeFooterModule,
  ]
})
export class ProfileModule { }
