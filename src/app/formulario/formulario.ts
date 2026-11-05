import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PedidoService } from '../service/pedido-service';

@Component({
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
  imports: [ReactiveFormsModule],
})
export class Formulario {

  pedidoService = inject(PedidoService);
  mensaje = signal('');

  form = new FormGroup({
    hora: new FormControl('', Validators.required),
    direccion: new FormControl('',Validators.required),
    pago: new FormControl('tarjeta', Validators.required),

    tarjeta: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d{16}$/)],
    }),
    bizum: new FormControl(
      { value: '', disabled: true },
      {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d{9}$/)],
      },
    ),
  });

  constructor() {
    this.form.controls.pago.valueChanges.subscribe((pago) => {
      if (pago === 'tarjeta') {
        this.form.controls.tarjeta.enable();
        this.form.controls.bizum.disable();
      } else {
        this.form.controls.bizum.enable();
        this.form.controls.tarjeta.disable();
      }
    });
  }

  // LIMPIAR: vacía el pedido y el formulario, y vuelve a la lista de pizzas
  limpiar(){
    this.pedidoService.vaciar();
    this.form.reset({ pago: 'tarjeta' });
  }

  enviar() {
    if (this.form.invalid) {
      return;
    }

    this.pedidoService.vaciar();
    this.form.reset();
    this.mensaje.set('¡Gracias por tu pedido!');
  }






}

