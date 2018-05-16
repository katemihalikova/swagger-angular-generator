/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RestAuthService} from '../../../controllers/RestAuth';

@Injectable()
export class LoginTwoFormService {
  form: FormGroup;
  constructor(
    private restAuthService: RestAuthService,
  ) {
    this.form = new FormGroup({
      data: new FormGroup({
        username: new FormControl(undefined, []),
        email: new FormControl(undefined, [Validators.email]),
        password: new FormControl(undefined, [Validators.required]),
      }, [Validators.required]),
    });
  }

  submit() {
    return this.restAuthService.loginTwo(this.form.value);
  }
}
