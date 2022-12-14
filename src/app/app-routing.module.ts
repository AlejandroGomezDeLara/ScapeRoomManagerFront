import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./front-pages/home/home.module').then(m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./front-pages/game-list/game-list.module').then(m => m.GameListModule) },
  { path: 'search/:id/interior', loadChildren: () => import('./front-pages/interior/interior.module').then(m => m.InteriorModule) },
  { path: 'chats', canActivate: [AuthGuard], loadChildren: () => import('./front-pages/chats/chats.module').then(m => m.ChatsModule) },
  { path: 'chats/:id', canActivate: [AuthGuard], loadChildren: () => import('./front-pages/chats/chats.module').then(m => m.ChatsModule) },

  { path: 'login', loadChildren: () => import('./front-pages/login/login.module').then(m => m.LoginModule) },

  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', loadChildren: () => import('./front-pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'map', loadChildren: () => import('./front-pages/map-search/map-search.module').then(m => m.MapSearchModule) },
  { path: 'ranking', loadChildren: () => import('./front-pages/ranking/ranking.module').then(m => m.RankingModule) },
  { path: 'profile', loadChildren: () => import('./front-pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: ':id/profile', loadChildren: () => import('./front-pages/external-profile/external-profile.module').then(m => m.ExternalProfileModule) },


];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
