import { Component, inject, input } from '@angular/core';
import { Pizza } from '../../models/Pizza';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import { PedidoService } from '../../service/pedido-service';
import { Pedido } from '../../pedido/pedido';
import {Inject} from '@angular/core';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {


  pedidoService = inject(PedidoService);

  tarjeta = input.required<Pizza>();

  formulario = new FormGroup({
    cantidad: new FormControl(1, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
  });


  anadir() {
    if (this.formulario.invalid) {
      return;
    }
    this.pedidoService.anadirPizza(this.tarjeta(), this.formulario.controls.cantidad.value);
    console.log(this.pedidoService.Lineas())
    this.formulario.reset();
  }
}
