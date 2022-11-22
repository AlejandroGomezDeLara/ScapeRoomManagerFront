import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteriorRoutingModule } from './interior-routing.module';
import { InteriorComponent } from './interior.component';
import { AppLoadingModule } from 'src/app/components/app-loading/app-loading.module';
import { RouterModule, Routes } from '@angular/router';
import { RatingModule } from 'src/app/components/game-list/rating/rating.module';
import { AppImageSliderModule } from 'src/app/components/app-image-slider/app-image-slider.module';


const routes: Routes = [
  {
    path: '',
    component: InteriorComponent
  }
];

@NgModule({
  declarations: [
    InteriorComponent
  ],
  imports: [
    CommonModule,
    InteriorRoutingModule,
    RatingModule,
    AppLoadingModule,
    AppImageSliderModule,
    RouterModule.forChild(routes)

  ]
})
export class InteriorModule { }
