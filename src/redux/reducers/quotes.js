import { GET_DATA, GET_QUOTES_ERROR, GET_QUOTES_LOADING } from '../actions';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const quotes = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        data: action.payload.quotes,
        loading: false,
        error: false,
      };
    }
    case GET_QUOTES_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_QUOTES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default quotes;
