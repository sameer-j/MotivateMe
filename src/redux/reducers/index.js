import { combineReducers } from 'redux';

import quotes from './quotes';
import userData from './userData';

export default combineReducers({
  quotes,
  userData,
});
