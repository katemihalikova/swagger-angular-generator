/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../controllers/Products';
import {ProductsFormService} from './products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
})

export class ProductsComponent implements OnInit {
  constructor(
    public productsFormService: ProductsFormService,
    private productsService: ProductsService,
  ) {}

  ngOnInit() {
  }

  products() {
    this.productsService.products(this.productsFormService.form.value);
  }

}
