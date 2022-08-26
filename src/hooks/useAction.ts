import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../store/action-creators';

type BindActionCreatorsType = ReturnType<typeof bindActionCreators>;

export const useAction = (): BindActionCreatorsType => {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreators, dispatch);
};
