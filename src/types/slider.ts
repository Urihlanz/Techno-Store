export enum SliderActionTypes {
  SET_INCREASE = 'SET_INCREASE',
  SET_DECREASE = 'SET_DECREASE',
}

export interface SetIncreaseAction {
  type: SliderActionTypes.SET_INCREASE;
  payload: number;
}

export interface SetDecreaseAction {
  type: SliderActionTypes.SET_DECREASE;
  payload: number;
}

export type SliderAction = SetIncreaseAction | SetDecreaseAction;
