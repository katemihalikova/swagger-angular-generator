/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {RegistrationService} from '../../../controllers/Registration';
import {RegistrationFormService} from './registration.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
})

export class RegistrationComponent implements OnInit {
  constructor(
    public registrationFormService: RegistrationFormService,
    private registrationService: RegistrationService,
  ) {}

  ngOnInit() {
  }

  registration() {
    this.registrationService.registration(this.registrationFormService.form.value);
  }

}
