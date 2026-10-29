import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import {ListaPizzas} from './lista-pizzas/lista-pizzas';
import {Footer} from './footer/footer';


@Component({
  imports: [RouterOutlet, Header, Navbar, ListaPizzas, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pizzeria');

  //recibir el emit del componente header.

  ingredienteRecibido = '';

  mostrarIngrediente(text: string){
    this.ingredienteRecibido = text;
  }

}
