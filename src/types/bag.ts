import { ProductStateTypes } from './product';

export enum BagActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export interface BagState {
  bag: ProductStateTypes[];
}

export interface AddProductAction {
  type: BagActionTypes.ADD_PRODUCT;
  payload: ProductStateTypes;
}

export interface RemoveProductAction {
  type: BagActionTypes.REMOVE_PRODUCT;
  payload: ProductStateTypes;
}

export type BagAction = AddProductAction | RemoveProductAction;
