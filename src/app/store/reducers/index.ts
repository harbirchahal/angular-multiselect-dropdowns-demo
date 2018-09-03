import { MetaReducer, ActionReducerMap } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromOrder from './order.reducer';
import { environment } from '../../../environments/environment';

export interface AppState {
  order: fromOrder.State;
}

export const REDUCERS: ActionReducerMap<AppState> = {
  order: fromOrder.reducer
};

export const META_REDUCERS: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
