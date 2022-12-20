import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteriorChatRoutingModule } from './interior-chat-routing.module';
import { InteriorChatComponent } from './interior-chat.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppLoadingModule } from 'src/app/components/app-loading/app-loading.module';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';

const routes: Routes = [
  {
    path: '',
    component: InteriorChatComponent
  }
];

@NgModule({
  declarations: [InteriorChatComponent],
  imports: [
    CommonModule,
    InteriorChatRoutingModule,
    HomeFooterModule,
    FormsModule,
    AppLoadingModule,
    RouterModule.forChild(routes)
  ]
})
export class InteriorChatModule { }