import { Component } from '@angular/core';
import { Pedido } from '../pedido/pedido';
import { Formulario } from '../formulario/formulario';

// Página "Pedidos": junta el resumen del pedido y el formulario de datos de entrega
@Component({
  imports: [Pedido, Formulario],
  selector: 'app-pagina-pedido',
  styleUrl: './pagina-pedido.css',
  templateUrl: './pagina-pedido.html',
})
export class PaginaPedido {}
