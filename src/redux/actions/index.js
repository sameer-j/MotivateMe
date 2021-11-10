import firestore from '@react-native-firebase/firestore';

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

export const getQuotes = (dispatch) => {
  dispatch({ type: GET_QUOTES_LOADING });
  const subscriber = firestore()
    .collection('quotes')
    .onSnapshot((querySnapshot) => {
      const quotes = [];

      querySnapshot.forEach((documentSnapshot) => {
        quotes.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      dispatch({
        type: GET_QUOTES,
        payload: quotes,
      });
    });

  // Unsubscribe from events when no longer in use
  return subscriber;
};

export const setFavorite = (dispatch, id, flag) => {
  dispatch({
    type: SET_FAVORITES,
    payload: {
      [id]: flag,
    },
  });
};
