import { Dispatch } from 'redux';

import { BagAction, BagActionTypes } from '../../types/bag';
import { ProductStateTypes } from '../../types/product';

export const addProduct = (product: ProductStateTypes) => {
  return (dispatch: Dispatch<BagAction>): void => {
    dispatch({ type: BagActionTypes.ADD_PRODUCT, payload: product });
  };
};

export const removeProduct = (product: ProductStateTypes) => {
  return (dispatch: Dispatch<BagAction>): void => {
    dispatch({ type: BagActionTypes.REMOVE_PRODUCT, payload: product });
  };
};
