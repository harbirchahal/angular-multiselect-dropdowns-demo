import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import { State } from '../reducers/order.reducer';

const orderFeature = createFeatureSelector<State>('order');

export const getCategories = createSelector(
  orderFeature,
  state => state.categories
);

export const getProducts = createSelector(
  orderFeature,
  state => state.products
);
