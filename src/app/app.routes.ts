import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((component) => component.Login),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then((component) => component.Dashboard),
  },
  {
    path: 'dashboard/new',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/article-edit/article-edit').then((component) => component.ArticleEdit),
  },
  {
    path: 'dashboard/edit/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/article-edit/article-edit').then((component) => component.ArticleEdit),
  },
  {
    path: 'dashboard/preview',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/article/article').then((component) => component.Article),
  },
  {
    path: 'blog/:path',
    loadComponent: () => import('./pages/article/article').then((component) => component.Article),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
