import {Component, NgModule} from '@angular/core';
import {diavola, hawaii, magarita, Order, Pizza, prosciutto} from './pizza.model';
import {BakeService} from "./services/bake.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'My Pizza Shop';
  order: Order;

  constructor(private bakeService: BakeService) {
    this.order = new Order([
      {amount: 1, pizza: magarita},
      {amount: 2, pizza: prosciutto}
    ], 'example@gmail.com');
  }

  pizzas: Pizza[] = [magarita, prosciutto, hawaii, diavola]

  submitOrder() {
    alert(`Your pizza has been ordered! Check your email (${this.order.email}) for your order confirmation!`)
    alert(`Order will be delivered in ${this.bakeService.calculateBakeTimeForOrder(this.order)} minutes!`);
  }

  orderItemChanged(amount: number) {
    console.log('new order amount: ' + amount)
  }
}
