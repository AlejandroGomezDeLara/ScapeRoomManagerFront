import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./front-pages/home/home.module').then(m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./front-pages/game-list/game-list.module').then(m => m.GameListModule) },
  { path: 'search/:id/interior', loadChildren: () => import('./front-pages/interior/interior.module').then(m => m.InteriorModule) },
  { path: 'chats', canActivate: [AuthGuard], loadChildren: () => import('./front-pages/chats/chats.module').then(m => m.ChatsModule) },
  { path: 'chats/:id/interior-chat', canActivate: [AuthGuard], loadChildren: () => import('./front-pages/interior-chat/interior-chat.module').then(m => m.InteriorChatModule) },

  { path: 'login', loadChildren: () => import('./front-pages/login/login.module').then(m => m.LoginModule) },

  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', loadChildren: () => import('./front-pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'map', loadChildren: () => import('./front-pages/map-search/map-search.module').then(m => m.MapSearchModule) },
  { path: 'ranking', loadChildren: () => import('./front-pages/ranking/ranking.module').then(m => m.RankingModule) },
  { path: 'profile', loadChildren: () => import('./front-pages/profile/profile.module').then(m => m.ProfileModule) },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
