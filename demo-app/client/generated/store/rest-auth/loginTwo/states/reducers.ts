/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface LoginTwoState {
  data: __model.Login;
  loading: boolean;
  error: string;
}

export const initialLoginTwoState: LoginTwoState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'LoginTwo';
export const getLoginTwoStateSelector = createFeatureSelector<LoginTwoState>(selectorName);

export function LoginTwoReducer(
  state: LoginTwoState = initialLoginTwoState,
  action: actions.LoginTwoAction): LoginTwoState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
