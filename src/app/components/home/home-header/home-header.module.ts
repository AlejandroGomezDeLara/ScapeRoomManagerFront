import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header.component';
import { AutocompleteSearchbarComponent } from '../autocomplete-searchbar/autocomplete-searchbar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeHeaderComponent,
    AutocompleteSearchbarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports:[HomeHeaderComponent]
})
export class HomeHeaderModule { }
