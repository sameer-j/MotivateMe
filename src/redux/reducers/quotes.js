import {
  GET_FAVORITES,
  GET_QUOTES,
  GET_QUOTES_ERROR,
  GET_QUOTES_LOADING,
} from '../actions';

const initialState = {
  data: {},
  loading: false,
  error: false,
  favorites: {},
};

const quotes = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_QUOTES_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_QUOTES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_FAVORITES: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default quotes;
