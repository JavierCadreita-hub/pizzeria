import { Component, inject } from '@angular/core';
import { PedidoService } from '../service/pedido-service';

@Component({
  imports: [],
  selector: 'app-pedido',
  styleUrl: './pedido.css',
  templateUrl: './pedido.html',
})
export class Pedido {

pedidoService = inject(PedidoService);

}
