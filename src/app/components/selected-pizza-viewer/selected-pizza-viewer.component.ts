import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from '../../models/pizza.model';


@Component({
  selector: 'app-selected-pizza-viewer',
  templateUrl: './selected-pizza-viewer.component.html',
  styleUrls: ['./selected-pizza-viewer.component.scss']
})
export class SelectedPizzaViewerComponent implements OnInit {
  @Output() newPizza: EventEmitter<Pizza> = new EventEmitter();
  @Input() pizzas: Pizza[];

  toppings = [
    {name: 'Оливки', added: true},
    {name: 'Сыр', added: false},
    {name: 'Бекон', added: false},
    {name: 'Реакт', added: false},
    {name: 'Ананасы', added: false},
    {name: 'Соус чили', added: false},
    {name: 'Томаты', added: false}
  ];

  constructor() { }

  ngOnInit() {}

  selectPizza(name: string) {
    console.log(name);
  }

  addPizza(pizzaId: string) {
    console.log(pizzaId);
  }

}
