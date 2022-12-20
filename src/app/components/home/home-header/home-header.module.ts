import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header.component';
import { AutocompleteSearchbarComponent } from '../autocomplete-searchbar/autocomplete-searchbar.component';
import { FormsModule } from '@angular/forms';
import { AppLoadingModule } from '../../app-loading/app-loading.module';



@NgModule({
  declarations: [
    HomeHeaderComponent,
    AutocompleteSearchbarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AppLoadingModule
  ],
  exports:[HomeHeaderComponent]
})
export class HomeHeaderModule { }
