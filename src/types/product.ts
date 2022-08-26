export enum ProductActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
  CHOOSE_PRODUCT = 'CHOOSE_PRODUCT',
  REJECT_PRODUCT = 'REJECT_PRODUCT',
}

export type ProductStateTypes = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
  rating: number;
};

export interface ProductState {
  products: ProductStateTypes[];
  loading: boolean;
  error: null | string;
}

export interface FetchProductsAction {
  type: ProductActionTypes.FETCH_PRODUCTS;
}

export interface FetchProductsSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: ProductStateTypes[];
}

export interface FetchProductsErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductAction =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsErrorAction;
