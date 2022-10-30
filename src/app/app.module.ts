import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './dashboard-pages/body/body.component';
import { SidenavComponent } from './dashboard-pages/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard-pages/dashboard/dashboard.component';
import { ProductsComponent } from './dashboard-pages/products/products.component';
import { StatisticsComponent } from './dashboard-pages/statistics/statistics.component';
import { CoupensComponent } from './dashboard-pages/coupens/coupens.component';
import { SettingsComponent } from './dashboard-pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
