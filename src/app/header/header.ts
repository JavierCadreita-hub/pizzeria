import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  //pasar lo que se escribe en el input al componente app

  ingrediente = output<string>();

  emitirIngrediente(texto: string){
    this.ingrediente.emit(texto);
    console.log(texto);
  }


}
