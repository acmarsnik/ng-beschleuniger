export class Pizza {
  constructor(public name: string, public price: number) {
  }
}

export class OrderItem {
  constructor(public amount: number, public pizza: Pizza) {
  }
}

export class Order {
  constructor(public orderItems: OrderItem[], public email: string) {
  }

  get orderTotal(): number {
    let total = 0;
    this.orderItems.forEach(orderItem => {
      total += orderItem.amount * orderItem.pizza.price;
    })
    return total;
  }
}

export const  magarita = new Pizza('Magarita', 15);
export const  prosciutto = new Pizza('Prosciutto', 18);
export const  hawaii = new Pizza('Hawaii', 20);
export const  diavola = new Pizza('Diavola', 22);
