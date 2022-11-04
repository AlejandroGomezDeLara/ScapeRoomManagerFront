import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScapeListRoutingModule } from './scape-list-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ScapeListComponent } from './scape-list.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: ScapeListComponent
  }
];

@NgModule({
  declarations: [ScapeListComponent],
  imports: [
    CommonModule,
    ScapeListRoutingModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class ScapeListModule { }
