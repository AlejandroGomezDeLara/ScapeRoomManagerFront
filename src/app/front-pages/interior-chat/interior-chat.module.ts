import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteriorChatComponent } from './interior-chat.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { AppLoadingModule } from 'src/app/components/app-loading/app-loading.module';
import { MessageItemModule } from 'src/app/components/chat/message-item/message-item.module';

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
    MessageItemModule,
    HomeFooterModule,
    FormsModule,
    AppLoadingModule,
    RouterModule.forChild(routes)
  ]
})
export class InteriorChatModule { }
