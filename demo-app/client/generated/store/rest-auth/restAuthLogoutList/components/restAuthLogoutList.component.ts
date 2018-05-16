/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {RestAuthService} from '../../../controllers/RestAuth';
import {RestAuthLogoutListFormService} from './restAuthLogoutList.service';

@Component({
  selector: 'restAuthLogoutList',
  templateUrl: './restAuthLogoutList.component.html',
})

export class RestAuthLogoutListComponent implements OnInit {
  constructor(
    public restAuthLogoutListFormService: RestAuthLogoutListFormService,
    private restauthService: RestAuthService,
  ) {}

  ngOnInit() {
  }

  restauth() {
    this.restauthService.restAuthLogoutList(this.restAuthLogoutListFormService.form.value);
  }

}
