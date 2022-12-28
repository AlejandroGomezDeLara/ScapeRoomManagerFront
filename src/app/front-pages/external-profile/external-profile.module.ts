import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalProfileComponent } from './external-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';

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
    HomeFooterModule,
    RouterModule.forChild(routes)
  ]
})
export class ExternalProfileModule { }
