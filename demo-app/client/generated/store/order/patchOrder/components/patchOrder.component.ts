/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../controllers/Order';
import {PatchOrderFormService} from './patchOrder.service';

@Component({
  selector: 'patchOrder',
  templateUrl: './patchOrder.component.html',
})

export class PatchOrderComponent implements OnInit {
  constructor(
    public patchOrderFormService: PatchOrderFormService,
    private orderService: OrderService,
  ) {}

  ngOnInit() {
  }

  order() {
    this.orderService.patchOrder(this.patchOrderFormService.form.value);
  }

}
