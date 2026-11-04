import { Routes } from '@angular/router';
import { ListaPizzas } from './lista-pizzas/lista-pizzas';
import { PaginaPedido } from './pagina-pedido/pagina-pedido';

export const routes: Routes = [
  { path: '', component: ListaPizzas }, // localhost:4200/
  { path: 'pedido', component: PaginaPedido }, //localhost:4200/pedido
  { path: '**', redirectTo: '' }, // cualquier otra cosa
];

