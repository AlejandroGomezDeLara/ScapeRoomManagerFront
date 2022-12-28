import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalProfileComponent } from './external-profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExternalProfileComponent
  }
];

@NgModule({
  declarations: [ExternalProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExternalProfileModule { }
