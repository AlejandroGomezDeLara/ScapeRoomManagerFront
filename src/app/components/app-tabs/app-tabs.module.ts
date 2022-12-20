import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTabsComponent } from './app-tabs.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    AppTabsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    AppTabsComponent
  ]
})
export class AppTabsModule { }
