/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../controllers/Login';
import {LoginFormService} from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  constructor(
    public loginFormService: LoginFormService,
    private loginService: LoginService,
  ) {}

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.loginFormService.form.value);
  }

}
