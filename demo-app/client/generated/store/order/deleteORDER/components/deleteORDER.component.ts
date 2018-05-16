/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../controllers/Order';
import {DeleteORDERFormService} from './deleteORDER.service';

@Component({
  selector: 'deleteORDER',
  templateUrl: './deleteORDER.component.html',
})

export class DeleteORDERComponent implements OnInit {
  constructor(
    public deleteORDERFormService: DeleteORDERFormService,
    private orderService: OrderService,
  ) {}

  ngOnInit() {
  }

  order() {
    this.orderService.deleteORDER(this.deleteORDERFormService.form.value);
  }

}
