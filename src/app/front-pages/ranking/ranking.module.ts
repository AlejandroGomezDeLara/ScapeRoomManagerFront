import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking.component';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { AppLoadingModule } from 'src/app/components/app-loading/app-loading.module';

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
    RankingRoutingModule,
    HomeFooterModule,
    AppLoadingModule,
    RouterModule.forChild(routes)
  ]
})
export class RankingModule { }
