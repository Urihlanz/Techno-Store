import { Dispatch } from 'redux';

import { SliderAction, SliderActionTypes } from '../../types/slider';

export const setIncrease = (length: number) => {
  return (dispatch: Dispatch<SliderAction>): void => {
    dispatch({ type: SliderActionTypes.SET_INCREASE, payload: length });
  };
};

export const setDecrease = (length: number) => {
  return (dispatch: Dispatch<SliderAction>): void => {
    dispatch({ type: SliderActionTypes.SET_DECREASE, payload: length });
  };
};
