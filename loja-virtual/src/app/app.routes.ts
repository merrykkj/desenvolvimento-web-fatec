import { Routes } from '@angular/router';
import { Catalogo } from './catalogo/catalogo';
import { Home } from './home/home';
import { DetalheProduto } from './pages/detalhe-produto/detalhe-produto';

export const routes: Routes = [
  { path: "catalogo", component: Catalogo },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cadastro/cadastro').then(m => m.Cadastro)
  },
  { path: 'produto/:codigo', component: DetalheProduto },
  {
    path: 'carrinho',
    loadComponent: () => import('./pages/carrinho/carrinho').then(m => m.Carrinho)
  },
  { path: "", component: Home },

];