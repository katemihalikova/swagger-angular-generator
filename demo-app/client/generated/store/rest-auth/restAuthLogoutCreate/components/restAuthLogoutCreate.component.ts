/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {RestAuthService} from '../../../controllers/RestAuth';
import {RestAuthLogoutCreateFormService} from './restAuthLogoutCreate.service';

@Component({
  selector: 'restAuthLogoutCreate',
  templateUrl: './restAuthLogoutCreate.component.html',
})

export class RestAuthLogoutCreateComponent implements OnInit {
  constructor(
    public restAuthLogoutCreateFormService: RestAuthLogoutCreateFormService,
    private restauthService: RestAuthService,
  ) {}

  ngOnInit() {
  }

  restauth() {
    this.restauthService.restAuthLogoutCreate(this.restAuthLogoutCreateFormService.form.value);
  }

}
