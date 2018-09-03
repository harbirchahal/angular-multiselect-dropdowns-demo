import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import {
  ActionTypes,
  LoadProducts,
  LoadProductsSuccess,
  LoadCategories,
  LoadCategoriesSuccess
} from '../actions';
import { BackendService } from '../../services';

@Injectable()
export class OrderEffects {

  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) { }

  @Effect()
  loadCategories$ = this.actions$.pipe(
    ofType<LoadCategories>(ActionTypes.LoadCategories),
    switchMap(this.backendService.getCategories$),
    map(result => new LoadCategoriesSuccess(result))
  );

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType<LoadProducts>(ActionTypes.LoadProducts),
    map(action => action.payload),
    switchMap(this.backendService.getProducts$),
    map(result => new LoadProductsSuccess(result))
  );

}
