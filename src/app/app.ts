import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import {Footer} from './footer/footer';
import { Pizza } from './models/Pizza';


@Component({
  imports: [RouterOutlet, Header, Navbar, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pizzeria');

  private router = inject(Router);

  //recibir el emit del componente header.
  // La lista ahora es una página (va dentro del <router-outlet>), así que no se le puede
  // pasar un [input] desde aquí. El texto se pone en la URL (/?ingrediente=bacon) y el
  // router se lo entrega al input de la lista.
  mostrarIngrediente(text: string){
    this.router.navigate(['/'], { queryParams: { ingrediente: text || null }, replaceUrl: true });
  }

}
