/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {RestAuthService} from '../../../controllers/RestAuth';
import {RestAuthUserUpdateFormService} from './restAuthUserUpdate.service';

@Component({
  selector: 'restAuthUserUpdate',
  templateUrl: './restAuthUserUpdate.component.html',
})

export class RestAuthUserUpdateComponent implements OnInit {
  constructor(
    public restAuthUserUpdateFormService: RestAuthUserUpdateFormService,
    private restauthService: RestAuthService,
  ) {}

  ngOnInit() {
  }

  restauth() {
    this.restauthService.restAuthUserUpdate(this.restAuthUserUpdateFormService.form.value);
  }

}
