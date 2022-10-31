import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './intranet.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { BodyComponent } from '../components/body/body.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    IntranetComponent,
    SidenavComponent,
    BodyComponent]
})
export class IntranetModule { }
