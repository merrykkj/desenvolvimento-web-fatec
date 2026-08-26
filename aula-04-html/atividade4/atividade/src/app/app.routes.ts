import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ResultadoBusca } from './resultado-busca/resultado-busca';
import { ReenvioSenha } from './reenvio-senha/reenvio-senha';
import { CestaCompras } from './cesta-compras/cesta-compras';
import { DadosPedido } from './dados-pedido/dados-pedido';
import { DetalheProduto } from './detalhe-produto/detalhe-produto';
import { ListaPedidos } from './lista-pedidos/lista-pedidos';
import { Vitrine } from './vitrine/vitrine';

export const routes: Routes = [
  { path: "", component: Vitrine },
  { path: "Login", component: Login },
  { path: "ReenvioSenha", component: ReenvioSenha },
  { path: "CestaCompras", component: CestaCompras },
  { path: "DadosPedido", component: DadosPedido },
  { path: "DetalheProduto", component: DetalheProduto },
  { path: "ListaPedidos", component: ListaPedidos },
];
