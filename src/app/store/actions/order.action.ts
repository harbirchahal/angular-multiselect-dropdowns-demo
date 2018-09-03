import { Action } from '@ngrx/store';
import { ActionTypes } from './action-types.enum';
import { ActionWithPayload } from './action-with-payload';
import { Category, ProductsByCategory } from '../../models';

export class LoadCategories implements Action {
  readonly type = ActionTypes.LoadCategories;
}

export class LoadCategoriesSuccess implements ActionWithPayload {
  readonly type = ActionTypes.LoadCategoriesSuccess;

  constructor(public payload: Category[]) { }
}

export class LoadProducts implements ActionWithPayload {
  readonly type = ActionTypes.LoadProducts;

  constructor(public payload: Category) { }
}

export class LoadProductsSuccess implements ActionWithPayload {
  readonly type = ActionTypes.LoadProductsSuccess;

  constructor(public payload: ProductsByCategory) { }
}
