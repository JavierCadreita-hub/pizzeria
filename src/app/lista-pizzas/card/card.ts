import { Component, input } from '@angular/core';
import { Pizza } from '../../models/Pizza';


@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  tarjeta = input.required<Pizza>();
}
