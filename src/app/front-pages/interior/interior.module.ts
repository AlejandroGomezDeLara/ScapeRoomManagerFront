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
import { ReviewsSummaryModule } from 'src/app/components/reviews-summary/reviews-summary.module';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { GameReviewsModule } from 'src/app/components/interior/game-reviews/game-reviews.module';
import { MapModule } from 'src/app/components/map/map.module';


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
    GameDescriptionComponent,
    
  ],
  imports: [
    CommonModule,
    InteriorRoutingModule,
    RatingModule,
    ReviewsSummaryModule,
    AppLoadingModule,
    AppImageSliderModule,
    HomeFooterModule,
    GameReviewsModule,
    MapModule,
    RouterModule.forChild(routes)

  ]
})
export class InteriorModule { }
