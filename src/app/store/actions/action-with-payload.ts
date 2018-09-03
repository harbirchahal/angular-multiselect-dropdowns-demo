import { Action } from '@ngrx/store';

export interface ActionWithPayload extends Action {
  payload: any;
}
