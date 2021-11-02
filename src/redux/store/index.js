import { createStore } from 'redux';
import reducers from '../reducers';

const initialState = {
  quotes: [],
  isFetching: true,
};
export default createStore(reducers, initialState);
