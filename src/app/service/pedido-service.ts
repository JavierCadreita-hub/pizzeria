import { Service, computed, signal } from '@angular/core';
import {LineaPedido} from '../models/linea-pedido';
import { Pizza } from '../models/Pizza';

@Service()
export class PedidoService {

  Lineas = signal<LineaPedido[]>([]);

  // Se recalcula solo cada vez que cambia Lineas
  totalCarrito = computed(() =>
    this.Lineas().reduce((acum, actual) => acum + actual.pizza.precio * actual.cantidad, 0)
  );

  anadirPizza(pizza: Pizza,cantidad:number){
    this.Lineas.update(lista => [...lista,{pizza:pizza,cantidad:cantidad}])
  }

}
