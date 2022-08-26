import { combineReducers } from 'redux';

import { bagReducer } from './bagReducer';
import { productReducer } from './productReducer';
import { sliderReducer } from './sliderReducer';

export const rootReducer = combineReducers({
  product: productReducer,
  slider: sliderReducer,
  bag: bagReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
