import { GET_QUOTES, IS_FETCHING } from '../actions';

const quotes = (state = {}, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
      };
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }
    default:
      return state;
  }
};

export default quotes;
