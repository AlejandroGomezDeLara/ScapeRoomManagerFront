import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './dashboard-pages/coupens/coupens.component';
import { DashboardComponent } from './dashboard-pages/dashboard/dashboard.component';
import { ProductsComponent } from './dashboard-pages/products/products.component';
import { SettingsComponent } from './dashboard-pages/settings/settings.component';
import { StatisticsComponent } from './dashboard-pages/statistics/statistics.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
