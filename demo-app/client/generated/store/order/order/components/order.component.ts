/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../controllers/Order';
import {OrderFormService} from './order.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
})

export class OrderComponent implements OnInit {
  constructor(
    public orderFormService: OrderFormService,
    private orderService: OrderService,
  ) {}

  ngOnInit() {
  }

  order() {
    this.orderService.order(this.orderFormService.form.value);
  }

}
