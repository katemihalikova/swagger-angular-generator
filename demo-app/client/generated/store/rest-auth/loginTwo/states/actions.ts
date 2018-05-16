/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Action} from '@ngrx/store';
import {LoginTwoParams} from '../../../../controllers/RestAuth';
import * as __model from '../../../../model';

export enum Actions {
  START = '[loginTwo] Start',
  SUCCESS = '[loginTwo] Success',
  ERROR = '[loginTwo] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: LoginTwoParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Login) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type LoginTwoAction = Start | Success | Error;
