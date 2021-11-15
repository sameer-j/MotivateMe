import {
  getQuotesFromDB,
  getUserDataFromDB,
} from '../../modules/utils/dbQuery';

export const GET_QUOTES_LOADING = 'GET_QUOTES_LOADING';
export const GET_QUOTES_ERROR = 'GET_QUOTES_ERROR';
export const SET_FAVORITES = 'SET_FAVORITES';
export const GET_DATA = 'GET_DATA';

export const getData = async (dispatch) => {
  dispatch({ type: GET_QUOTES_LOADING });
  const quotes = await getQuotesFromDB();
  const userData = await getUserDataFromDB();
  dispatch({
    type: GET_DATA,
    payload: {
      quotes,
      userData,
    },
  });
};

export const setFavorite = (dispatch, id, flag) => {
  dispatch({
    type: SET_FAVORITES,
    payload: {
      [id]: flag,
    },
  });
};
