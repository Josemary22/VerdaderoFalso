import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'primaria',
    loadComponent: () => import('./primaria/primaria.component').then((m) => m.PrimariaComponent),
  },
  {
    path:'eso',
    loadComponent: () => import('./eso/eso.component').then((m) => m.EsoComponent),
  }
];
