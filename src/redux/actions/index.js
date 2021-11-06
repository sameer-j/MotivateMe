import { QUOTES_URL } from '../../constants';
import { getParsedFirestoreJSON } from '../../util';

export const GET_QUOTES = 'GET_QUOTES';
export const GET_QUOTES_LOADING = 'GET_QUOTES_LOADING';
export const GET_QUOTES_ERROR = 'GET_QUOTES_ERROR';
export const SET_FAVORITES = 'SET_FAVORITES';

/**
 * Action Object:
 * {
 *  type: GET_QUOTES,
 *  payload: quotes (object of quotes)
 * }
 * {
 *  type: GET_QUOTES_LOADING
 * }
 * {
 *  type: SET_FAVORITES,
 *  payload: {
 *    quoteid: true (boolean)
 *  }
 * }
 */

// export const fetchQuotes = async (dispatch) => {
//   dispatch({ type: IS_FETCHING, payload: true });
//   try {
//     console.log('fetching quotes...');
//     const response = await fetch(QUOTES_URL);
//     const json = await response.json();
//     dispatch({
//       type: GET_QUOTES,
//       payload: getParsedFirestoreJSON(json.documents),
//     });
//   } catch (error) {
//     console.error(error);
//   } finally {
//     dispatch({ type: IS_FETCHING, payload: false });
//   }
// };
export const fetchQuotes = (dispatch) => {
  dispatch({ type: GET_QUOTES_LOADING });
  fetch(QUOTES_URL)
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type: GET_QUOTES,
        payload: getParsedFirestoreJSON(json.documents),
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({ type: GET_QUOTES_ERROR });
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
