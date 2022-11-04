import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ScapeComponent } from './scape.component';

const routes: Routes = [
  {
    path: '',
    component: ScapeComponent
  }
];

@NgModule({
  declarations: [ScapeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ScapeModule { }
