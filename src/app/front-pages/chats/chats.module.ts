import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsComponent } from './chats.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeFooterModule } from 'src/app/components/home/home-footer/home-footer.module';
import { FormsModule } from '@angular/forms';

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
    HomeFooterModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatsModule { }
