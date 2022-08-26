import { SliderAction, SliderActionTypes } from '../../types/slider';

export const sliderReducer = (state = 1, action: SliderAction): number => {
  const lenght = action.payload - 2;

  switch (action.type) {
    case SliderActionTypes.SET_INCREASE:
      return state > lenght ? (state = 1) : state + 1;
    case SliderActionTypes.SET_DECREASE:
      return state < lenght ? (state = lenght) : state - 1;
    default:
      return state;
  }
};
