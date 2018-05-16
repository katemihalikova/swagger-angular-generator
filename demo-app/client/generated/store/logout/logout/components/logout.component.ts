/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {LogoutService} from '../../../controllers/Logout';
import {LogoutFormService} from './logout.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
})

export class LogoutComponent implements OnInit {
  constructor(
    public logoutFormService: LogoutFormService,
    private logoutService: LogoutService,
  ) {}

  ngOnInit() {
  }

  logout() {
    this.logoutService.logout(this.logoutFormService.form.value);
  }

}
