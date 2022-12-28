import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking.component';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';

const routes:Routes=[
  { 
    path:'',
    component:RankingComponent
  }
]

@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule,
    HomeFooterModule,
    RouterModule.forChild(routes)
  ]
})
export class RankingModule { }
