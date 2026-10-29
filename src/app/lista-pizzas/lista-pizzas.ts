import { Component, input } from '@angular/core';
import { Pizza } from '../models/Pizza';
import {Card} from './card/card';

@Component({
  imports: [Card],
  selector: 'app-lista-pizzas',
  styleUrl: './lista-pizzas.css',
  templateUrl: './lista-pizzas.html',
})
export class ListaPizzas {


  Pizzas: Pizza[] = [
    {nombre: 'Margarita', precio: 8.5, imagen: '/images/margarita.jpg', ingredientes: ['tomate', 'mozzarella', 'albahaca fresca', 'aceite de oliva']},
    {nombre: 'Pepperoni', precio: 9.5, imagen: '/images/pepperoni.jpg', ingredientes: ['tomate', 'mozzarella', 'pepperoni', 'orégano']},
    {nombre: 'Cuatro quesos', precio: 10, imagen: '/images/cuatro-quesos.jpg', ingredientes: ['mozzarella', 'gorgonzola', 'parmesano', 'queso de cabra']},
    {nombre: 'Barbacoa', precio: 10.5, imagen: '/images/barbacoa.jpg', ingredientes: ['salsa barbacoa', 'mozzarella', 'carne picada', 'bacon']},
    {nombre: 'Carbonara', precio: 10, imagen: '/images/carbonara.jpg', ingredientes: ['nata', 'mozzarella', 'bacon', 'champiñones']},
    {nombre: 'Hawaiana', precio: 9.5, imagen: '/images/hawaiana.jpg', ingredientes: ['tomate', 'mozzarella', 'jamón york', 'piña']},
    {nombre: 'Prosciutto', precio: 10.5, imagen: '/images/proscciuto.jpg', ingredientes: ['tomate', 'mozzarella', 'albahaca fresca', 'queso']},
    {nombre: 'Vegetal', precio: 9, imagen: '/images/vegetal.jpg', ingredientes: ['tomate', 'mozzarella', 'pimiento', 'cebolla']},


  ];

}
