import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./front-pages/home/home.module').then(m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./front-pages/game-list/game-list.module').then(m => m.GameListModule) },
  { path: 'login', loadChildren: () => import('./front-pages/login/login.module').then(m => m.LoginModule) },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', loadChildren: () => import('./front-pages/register/register.module').then(m => m.RegisterModule) },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
