import { Category, ProductsByCategory } from '../../models';
import { ActionTypes, ActionsUnion } from '../actions';

export interface State {
  categories: Category[];
  products: ProductsByCategory[];
}

const intitialState: State = {
  categories: [],
  products: []
};

export function reducer(state: State = intitialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadCategoriesSuccess: {
      return {
        ...state,
        categories: action.payload
      };
    }

    case ActionTypes.LoadProductsSuccess: {
      return {
        ...state,
        products: [
          ...state.products,
          action.payload
        ]
      };
    }
  }

  return state;
}
