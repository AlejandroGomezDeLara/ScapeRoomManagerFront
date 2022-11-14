import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListRoutingModule } from './game-list-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list.component';
import {MatCardModule} from '@angular/material/card';
import { GameItemComponent } from 'src/app/components/game-list/game-item/game-item.component';
import { GameListFiltersComponent } from 'src/app/components/game-list/game-list-filters/game-list-filters.component';
import { FormsModule } from '@angular/forms';
import { NpnSliderModule } from "npn-slider";
import { RatingComponent } from 'src/app/components/game-list/rating/rating.component';
import { GameListPaginationComponent } from 'src/app/components/game-list/game-list-pagination/game-list-pagination.component';
import { MatMenuModule } from '@angular/material/menu';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { AppLoadingModule } from 'src/app/components/app-loading/app-loading.module';
import { AppImageSliderModule } from 'src/app/components/app-image-slider/app-image-slider.module';

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
    GameListFiltersComponent,
    RatingComponent,
    GameListPaginationComponent,
],
  imports: [
    CommonModule,
    GameListRoutingModule,
    MatCardModule,
    FormsModule,
    NpnSliderModule,
    MatMenuModule,
    HomeFooterModule,
    AppLoadingModule,
    AppImageSliderModule,
    RouterModule.forChild(routes)
  ]
})
export class GameListModule { }
