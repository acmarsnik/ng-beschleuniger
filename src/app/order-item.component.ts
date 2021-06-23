import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderItem} from "./pizza.model";

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
})

export class OrderItemComponent implements OnInit {
  @Input()
  orderItem: OrderItem= new OrderItem(0,{name:'',price:0});

  ngOnInit() {
  }

  @Output()
  orderAmountChanged = new EventEmitter();

  amountChanged() {
    this.orderAmountChanged.emit(this.orderItem.amount);
    console.log('something changed')
  }
}
