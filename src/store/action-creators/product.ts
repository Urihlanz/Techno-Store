import axios from 'axios';
import { Dispatch } from 'redux';

import {
  ProductAction,
  ProductActionTypes,
  ProductStateTypes,
} from '../../types/product';

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>): Promise<void> => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS });
      const [smartphonesResponse, laptopsResponse] = await Promise.all([
        axios.get('https://dummyjson.com/products/category/smartphones'),
        axios.get('https://dummyjson.com/products/category/laptops'),
      ]);
      const response = [
        ...smartphonesResponse.data.products,
        ...laptopsResponse.data.products,
      ];

      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response,
      });
    } catch {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: 'Products get error',
      });
    }
  };
};
