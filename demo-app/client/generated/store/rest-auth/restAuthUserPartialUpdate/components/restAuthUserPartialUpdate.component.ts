/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {RestAuthService} from '../../../controllers/RestAuth';
import {RestAuthUserPartialUpdateFormService} from './restAuthUserPartialUpdate.service';

@Component({
  selector: 'restAuthUserPartialUpdate',
  templateUrl: './restAuthUserPartialUpdate.component.html',
})

export class RestAuthUserPartialUpdateComponent implements OnInit {
  constructor(
    public restAuthUserPartialUpdateFormService: RestAuthUserPartialUpdateFormService,
    private restauthService: RestAuthService,
  ) {}

  ngOnInit() {
  }

  restauth() {
    this.restauthService.restAuthUserPartialUpdate(this.restAuthUserPartialUpdateFormService.form.value);
  }

}
