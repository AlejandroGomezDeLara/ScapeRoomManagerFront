import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './chats.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { FormsModule } from '@angular/forms';
import { AppLoadingModule } from 'src/app/components/app-loading/app-loading.module';

const routes: Routes = [
  {
    path: '',
    component: ChatsComponent
  }
];

@NgModule({
  declarations: [ChatsComponent],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    HomeFooterModule,
    FormsModule,
    AppLoadingModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatsModule { }
