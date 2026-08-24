import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        './pages/dashboard/dashboard'
      ).then(
        (component) => component.Dashboard
      ),
  },
  {
    path: 'dashboard/new',
    loadComponent: () =>
      import(
        './pages/article-edit/article-edit'
      ).then(
        (component) => component.ArticleEdit
      ),
  },
  {
    path: 'dashboard/edit/:id',
    loadComponent: () =>
      import(
        './pages/article-edit/article-edit'
      ).then(
        (component) => component.ArticleEdit
      ),
  },
  {
    path: 'blog/:path',
    loadComponent: () =>
      import(
        './pages/article/article'
      ).then(
        (component) => component.Article
      ),
  },
  {
  path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(
        (component) => component.Login
      ),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];