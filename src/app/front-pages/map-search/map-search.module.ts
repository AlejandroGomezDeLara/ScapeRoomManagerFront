import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapSearchRoutingModule } from './map-search-routing.module';
import { MapSearchComponent } from './map-search.component';
import { MapModule } from 'src/app/components/map/map.module';
import { GameListFiltersModule } from 'src/app/components/game-list/game-list-filters/game-list-filters.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { GameRecomendationsModule } from 'src/app/components/game-recomendations/game-recomendations.module';
import { OpenReservationModule } from 'src/app/components/game-list/open-reservation/open-reservation.module';

const routes:Routes=[
  { 
    path:'',
    component:MapSearchComponent
  }
]

@NgModule({
  declarations: [
    MapSearchComponent
  ],
  imports: [
    CommonModule,
    MapSearchRoutingModule,
    MapModule,
    HomeFooterModule,
    GameListFiltersModule,
    GameRecomendationsModule,
    OpenReservationModule,
    RouterModule.forChild(routes)
  ]
})
export class MapSearchModule { }
