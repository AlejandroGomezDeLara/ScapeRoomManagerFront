import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { HomeHeaderModule } from 'src/app/components/home/home-header/home-header.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeFooterModule,
    HomeHeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
