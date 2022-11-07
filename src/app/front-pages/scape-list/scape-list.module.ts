import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScapeListRoutingModule } from './scape-list-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ScapeListComponent } from './scape-list.component';
import {MatCardModule} from '@angular/material/card';
import { ScapeItemComponent } from 'src/app/components/scape-item/scape-item.component';
import { ScapeListHeaderComponent } from 'src/app/components/scape-list-header/scape-list-header.component';
import { ScapeListPaginationComponent } from 'src/app/components/scape-list-pagination/scape-list-pagination.component';
import { ScapeListFiltersComponent } from 'src/app/components/scape-list-filters/scape-list-filters.component';
import { ScapeListFooterComponent } from 'src/app/components/scape-list-footer/scape-list-footer.component';
import { FormsModule } from '@angular/forms';
import { AutocompleteSearchbarComponent } from 'src/app/components/autocomplete-searchbar/autocomplete-searchbar.component';

const routes: Routes = [
  {
    path: '',
    component: ScapeListComponent
  }
];

@NgModule({
  declarations: [
    ScapeListComponent,
    ScapeItemComponent,
    ScapeListHeaderComponent,
    ScapeListPaginationComponent,
    ScapeListFiltersComponent,
    ScapeListFooterComponent,
    AutocompleteSearchbarComponent
],
  imports: [
    CommonModule,
    ScapeListRoutingModule,
    MatCardModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ScapeListModule { }
