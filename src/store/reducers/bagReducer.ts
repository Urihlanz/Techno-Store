import { BagAction, BagActionTypes, BagState } from '../../types/bag';

const initialState: BagState = {
  bag: [],
};

export const bagReducer = (
  state = initialState,
  action: BagAction
): BagState => {
  switch (action.type) {
    case BagActionTypes.ADD_PRODUCT:
      const productIndex = state.bag.findIndex(
        (product) => product.id === action.payload.id
      );

      return {
        bag: productIndex === -1 ? [...state.bag, action.payload] : state.bag,
      };
    case BagActionTypes.REMOVE_PRODUCT:
      return {
        bag: state.bag.filter((product) => product !== action.payload),
      };
    default:
      return state;
  }
};
