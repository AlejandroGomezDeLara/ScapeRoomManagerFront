import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListFiltersComponent } from './game-list-filters.component';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';



@NgModule({
  declarations: [
    GameListFiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng5SliderModule
  ],
  exports:[
    GameListFiltersComponent
  ]
})
export class GameListFiltersModule { }
