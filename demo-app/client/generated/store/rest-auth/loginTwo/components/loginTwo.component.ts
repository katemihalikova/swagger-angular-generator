/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {RestAuthService} from '../../../controllers/RestAuth';
import {LoginTwoFormService} from './loginTwo.service';

@Component({
  selector: 'loginTwo',
  templateUrl: './loginTwo.component.html',
})

export class LoginTwoComponent implements OnInit {
  constructor(
    public loginTwoFormService: LoginTwoFormService,
    private restauthService: RestAuthService,
  ) {}

  ngOnInit() {
  }

  restauth() {
    this.restauthService.loginTwo(this.loginTwoFormService.form.value);
  }

}
