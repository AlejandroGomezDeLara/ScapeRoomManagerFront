import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageItemComponent } from './message-item.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [MessageItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MessageItemComponent
  ]
})
export class MessageItemModule { }
