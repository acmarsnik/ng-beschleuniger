import {Injectable} from '@angular/core';
import {Order} from "../pizza.model";

@Injectable(/*{providedIn: 'root'}*/)
export class BakeService {
  constructor() {
  }

  public calculateBakeTimeForOrder(pizzaOrder: Order): number {
    let orderedTotalPizza = 0;
    pizzaOrder.orderItems.forEach(orderedItem => {
      orderedTotalPizza += orderedItem.amount;
    })
    return orderedTotalPizza * 5;
  }
}
