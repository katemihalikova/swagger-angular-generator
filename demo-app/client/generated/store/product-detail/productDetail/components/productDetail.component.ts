/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {ProductDetailService} from '../../../controllers/ProductDetail';
import {ProductDetailFormService} from './productDetail.service';

@Component({
  selector: 'productDetail',
  templateUrl: './productDetail.component.html',
})

export class ProductDetailComponent implements OnInit {
  constructor(
    public productDetailFormService: ProductDetailFormService,
    private productdetailService: ProductDetailService,
  ) {}

  ngOnInit() {
  }

  productdetail() {
    this.productdetailService.productDetail(this.productDetailFormService.form.value);
  }

}
