import { Component, OnInit } from '@angular/core';
import {Pizza} from '../models/pizza.model';

@Component({
  selector: 'app-pizza-offer',
  templateUrl: './pizza-offer.component.html',
  styleUrls: ['./pizza-offer.component.scss']
})
export class PizzaOfferComponent implements OnInit {
  pizzas: Pizza[];

  constructor() {
    this.pizzas = [
      {name: 'Пепперони'},
      {name: '4 Сыра'},
      {name: 'Балоньеза'},
      {name: 'Футбольная'},
      {name: 'Чили'}
    ].map(p => new Pizza(p.name));
  }

  ngOnInit() {}

  newPizzaAdded(pizza: Pizza) {
    console.log(pizza);
  }

}
