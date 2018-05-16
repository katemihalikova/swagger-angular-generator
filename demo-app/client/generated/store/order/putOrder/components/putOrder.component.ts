/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../controllers/Order';
import {PutOrderFormService} from './putOrder.service';

@Component({
  selector: 'putOrder',
  templateUrl: './putOrder.component.html',
})

export class PutOrderComponent implements OnInit {
  constructor(
    public putOrderFormService: PutOrderFormService,
    private orderService: OrderService,
  ) {}

  ngOnInit() {
  }

  order() {
    this.orderService.putOrder(this.putOrderFormService.form.value);
  }

}
