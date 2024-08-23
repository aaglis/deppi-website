import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent)
  },
  {
    path: 'pesquisa',
    loadComponent: () => import('./pages/pesquisa/pesquisa.component').then(m => m.PesquisaComponent)
  }
];
