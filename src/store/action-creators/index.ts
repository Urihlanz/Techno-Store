import * as BagActionCreators from './bag';
import * as ProductActionCreators from './product';
import * as SliderActionCreators from './slider';

export default {
  ...ProductActionCreators,
  ...SliderActionCreators,
  ...BagActionCreators,
};
