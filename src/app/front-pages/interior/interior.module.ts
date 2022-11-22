import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteriorRoutingModule } from './interior-routing.module';
import { InteriorComponent } from './interior.component';
import { AppLoadingModule } from 'src/app/components/app-loading/app-loading.module';
import { RouterModule, Routes } from '@angular/router';
import { RatingModule } from 'src/app/components/game-list/rating/rating.module';
import { AppImageSliderModule } from 'src/app/components/app-image-slider/app-image-slider.module';
import { EspecificationsSidebarComponent } from 'src/app/components/interior/especifications-sidebar/especifications-sidebar.component';
import { GameDescriptionComponent } from 'src/app/components/interior/game-description/game-description.component';


const routes: Routes = [
  {
    path: '',
    component: InteriorComponent
  }
];

@NgModule({
  declarations: [
    InteriorComponent,
    EspecificationsSidebarComponent,
    GameDescriptionComponent
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
