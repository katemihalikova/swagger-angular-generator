/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {RestAuthService} from '../../../controllers/RestAuth';
import {RestAuthUserReadFormService} from './restAuthUserRead.service';

@Component({
  selector: 'restAuthUserRead',
  templateUrl: './restAuthUserRead.component.html',
})

export class RestAuthUserReadComponent implements OnInit {
  constructor(
    public restAuthUserReadFormService: RestAuthUserReadFormService,
    private restauthService: RestAuthService,
  ) {}

  ngOnInit() {
  }

  restauth() {
    this.restauthService.restAuthUserRead(this.restAuthUserReadFormService.form.value);
  }

}
