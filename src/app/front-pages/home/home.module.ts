import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { GameListHeaderComponent } from 'src/app/components/game-list-header/game-list-header.component';
import { AutocompleteSearchbarComponent } from 'src/app/components/autocomplete-searchbar/autocomplete-searchbar.component';
import { FormsModule } from '@angular/forms';
import { HomeFooterComponent } from 'src/app/components/home-footer/home-footer.component';
import { HomeFooterModule } from 'src/app/components/home-footer/home-footer.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    GameListHeaderComponent,
    AutocompleteSearchbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    HomeFooterModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
