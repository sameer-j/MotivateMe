import { QUOTES_URL } from '../../constants';
import { getParsedFirestoreJSON } from '../../util';

export const GET_QUOTES = 'GET_QUOTES';
export const IS_FETCHING = 'IS_FETCHING';

/**
 * Action Object:
 * {
 *  type: GET_QUOTES,
 *  payload: quotes
 * }
 * {
 *  type: IS_FETCHING,
 *  payload: false
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
  dispatch({ type: IS_FETCHING, payload: true });
  try {
    fetch(QUOTES_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: GET_QUOTES,
          payload: getParsedFirestoreJSON(json.documents),
        });
        dispatch({ type: IS_FETCHING, payload: false });
      });
  } catch (error) {
    console.error(error);
    dispatch({ type: IS_FETCHING, payload: false });
  } finally {
    // dispatch({ type: IS_FETCHING, payload: false });
  }
};
