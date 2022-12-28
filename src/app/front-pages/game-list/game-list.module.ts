import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list.component';
import { MatCardModule } from '@angular/material/card';
import { GameItemComponent } from 'src/app/components/game-list/game-item/game-item.component';
import { FormsModule } from '@angular/forms';
import { GameListPaginationComponent } from 'src/app/components/game-list/game-list-pagination/game-list-pagination.component';
import { MatMenuModule } from '@angular/material/menu';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { AppImageSliderModule } from 'src/app/components/app-image-slider/app-image-slider.module';
import { OpenReservationModule } from 'src/app/components/game-list/open-reservation/open-reservation.module';
import { RatingModule } from 'src/app/components/game-list/rating/rating.module';
import { MapModule } from 'src/app/components/map/map.module';
import { Ng5SliderModule } from 'ng5-slider';
import { GameListFiltersModule } from 'src/app/components/game-list/game-list-filters/game-list-filters.module';

const routes: Routes = [
  {
    path: '',
    component: GameListComponent
  }
];

@NgModule({
  declarations: [
    GameListComponent,
    GameItemComponent,
    GameListPaginationComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatMenuModule,
    HomeFooterModule,
    AppImageSliderModule,
    OpenReservationModule,
    Ng5SliderModule,
    RatingModule,
    MapModule,
    GameListFiltersModule,
    RouterModule.forChild(routes)
  ]
})
export class GameListModule { }
