import { Component, input, computed} from '@angular/core';
import { Pizza } from '../models/Pizza';
import {Card} from './card/card';
import { Formulario } from '../formulario/formulario';

@Component({
  imports: [Card, Formulario],
  selector: 'app-lista-pizzas',
  styleUrl: './lista-pizzas.css',
  templateUrl: './lista-pizzas.html',
})
export class ListaPizzas {
  //Vamos a recibir el ingrediente del app component
  // Llega desde la URL (?ingrediente=bacon) gracias a withComponentInputBinding (app.config.ts).
  // Si en la URL no hay ingrediente, el router lo deja en undefined.
  ingredienteRecibido = input<string | undefined>('', { alias: 'ingrediente' });

  Pizzas: Pizza[] = [
    {
      nombre: 'Margarita',
      precio: 8.5,
      imagen: '/images/margarita.jpg',
      ingredientes: ['tomate', 'mozzarella', 'albahaca fresca', 'aceite de oliva'],
    },
    {
      nombre: 'Pepperoni',
      precio: 9.5,
      imagen: '/images/pepperoni.jpg',
      ingredientes: ['tomate', 'mozzarella', 'pepperoni', 'orégano'],
    },
    {
      nombre: 'Cuatro quesos',
      precio: 10,
      imagen: '/images/cuatro-quesos.jpg',
      ingredientes: ['mozzarella', 'gorgonzola', 'parmesano', 'queso de cabra'],
    },
    {
      nombre: 'Barbacoa',
      precio: 10.5,
      imagen: '/images/barbacoa.jpg',
      ingredientes: ['salsa barbacoa', 'mozzarella', 'carne picada', 'bacon'],
    },
    {
      nombre: 'Carbonara',
      precio: 10,
      imagen: '/images/carbonara.jpg',
      ingredientes: ['nata', 'mozzarella', 'bacon', 'champiñones'],
    },
    {
      nombre: 'Hawaiana',
      precio: 9.5,
      imagen: '/images/hawaiana.jpg',
      ingredientes: ['tomate', 'mozzarella', 'jamón york', 'piña'],
    },
    {
      nombre: 'Prosciutto',
      precio: 10.5,
      imagen: '/images/proscciuto.jpg',
      ingredientes: ['tomate', 'mozzarella', 'albahaca fresca', 'queso'],
    },
    {
      nombre: 'Vegetal',
      precio: 9,
      imagen: '/images/vegetal.jpg',
      ingredientes: ['tomate', 'mozzarella', 'pimiento', 'cebolla'],
    },
  ];

  // computed lo que hace aqui es calcular la lista filtrada a partir del input y se recalcula sola cada vez que el input cambia.
  // Es decir, mediante el filter se queda con todas las pizzas que tienen algún ingrediente (some)
  // que contiene el texto del input (includes), y por eso la lista cambia.

  pizzasFIltradas = computed(() => {
    const buscado = (this.ingredienteRecibido() ?? '').toLowerCase();

    if (buscado === '') {
      return this.Pizzas;
    }
    return this.Pizzas.filter((pizzas) =>
      pizzas.ingredientes.some((ing) => ing.toLowerCase().includes(buscado)),
    );
  });
}
