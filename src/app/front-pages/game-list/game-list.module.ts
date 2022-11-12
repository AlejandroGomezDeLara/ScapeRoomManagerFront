import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListRoutingModule } from './game-list-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list.component';
import {MatCardModule} from '@angular/material/card';
import { GameItemComponent } from 'src/app/components/game-item/game-item.component';
import { GameListHeaderComponent } from 'src/app/components/game-list-header/game-list-header.component';
import { GameListFiltersComponent } from 'src/app/components/game-list-filters/game-list-filters.component';
import { GameListFooterComponent } from 'src/app/components/game-list-footer/game-list-footer.component';
import { FormsModule } from '@angular/forms';
import { AutocompleteSearchbarComponent } from 'src/app/components/autocomplete-searchbar/autocomplete-searchbar.component';
import { NpnSliderModule } from "npn-slider";
import { AppLoadingComponent } from 'src/app/components/app-loading/app-loading.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { GameListPaginationComponent } from 'src/app/components/game-list-pagination/game-list-pagination.component';

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
    GameListHeaderComponent,
    GameListFiltersComponent,
    GameListFooterComponent,
    AutocompleteSearchbarComponent,
    AppLoadingComponent,
    RatingComponent,
    GameListPaginationComponent
],
  imports: [
    CommonModule,
    GameListRoutingModule,
    MatCardModule,
    FormsModule,
    NpnSliderModule,
    RouterModule.forChild(routes)
  ]
})
export class GameListModule { }
