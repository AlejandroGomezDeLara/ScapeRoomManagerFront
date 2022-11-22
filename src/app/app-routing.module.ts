import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteriorComponent } from './front-pages/interior/interior.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./front-pages/home/home.module').then(m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./front-pages/game-list/game-list.module').then(m => m.GameListModule) },
  { path: 'search/:id/interior', loadChildren: () => import('./front-pages/interior/interior.module').then(m => m.InteriorModule) },
  { path: 'login', loadChildren: () => import('./front-pages/login/login.module').then(m => m.LoginModule) },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', loadChildren: () => import('./front-pages/register/register.module').then(m => m.RegisterModule) },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
