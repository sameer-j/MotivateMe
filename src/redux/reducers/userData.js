import { GET_DATA, SET_FAVORITES } from '../actions';

const initialState = {
  favorites: {},
  settings: {},
};

const userData = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA: {
      return {
        ...state,
        ...payload.userData,
      };
    }
    case SET_FAVORITES: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          ...payload,
        },
      };
    }
    default:
      return state;
  }
};

export default userData;
