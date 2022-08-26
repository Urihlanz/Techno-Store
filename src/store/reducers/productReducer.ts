import {
  ProductAction,
  ProductActionTypes,
  ProductState,
} from '../../types/product';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { loading: true, error: null, products: [] };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { loading: false, error: null, products: action.payload };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};
