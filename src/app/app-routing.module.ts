import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './intranet-pages/dashboard/dashboard.component';
import { ProductsComponent } from './intranet-pages/products/products.component';
import { IntranetComponent } from './intranet/intranet.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./front-pages/login/login.module').then(m => m.LoginModule) },
  {
    path: 'intranet',
    component: IntranetComponent,
    children: [
      { path: 'dashboard', component:DashboardComponent },
      { path: 'products', component:ProductsComponent },
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
