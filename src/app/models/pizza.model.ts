let counter = 0;

export class Pizza {
  id: number;
  name: string;
  toppings: string[];

  constructor(name: string) {
    this.id = ++counter;
    this.name = name;
    this.toppings = [];
  }
}
