import { Service, signal } from '@angular/core';
import {LineaPedido} from '../models/linea-pedido';
import { Pizza } from '../models/Pizza';

@Service()
export class PedidoService {

  Lineas = signal<LineaPedido[]>([]);

  anadirPizza(pizza: Pizza,cantidad:number){
    this.Lineas.update(lista => [...lista,{pizza:pizza,cantidad:cantidad}])

  }


}
