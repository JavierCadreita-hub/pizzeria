import { Routes } from '@angular/router';
import { ListaPizzas } from './lista-pizzas/lista-pizzas';
import { PaginaPedido } from './pagina-pedido/pagina-pedido';

export const routes: Routes = [
  // Página principal: la lista de pizzas con el filtro
  { path: '', component: ListaPizzas },
  // Página del pedido: resumen y formulario
  { path: 'pedido', component: PaginaPedido },
  // Cualquier otra dirección vuelve a la lista
  { path: '**', redirectTo: '' },
];
