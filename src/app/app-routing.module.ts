import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './intranet-pages/dashboard/dashboard.component';
import { ProductsComponent } from './intranet-pages/products/products.component';
import { SettingsComponent } from './intranet-pages/settings/settings.component';
import { StatisticsComponent } from './intranet-pages/statistics/statistics.component';
import { IntranetComponent } from './intranet/intranet.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./front-pages/scape-list/scape-list.module').then(m => m.ScapeListModule) },
  { path: 'login', loadChildren: () => import('./front-pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./front-pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'scape', loadChildren: () => import('./front-pages/scape/scape.module').then(m => m.ScapeModule) },
  {
    path: 'intranet',
    component: IntranetComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component:DashboardComponent },
      { path: 'products', component:ProductsComponent },
      { path: 'settings', component:SettingsComponent },
      { path: 'statistics', component:StatisticsComponent },

    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
