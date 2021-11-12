import firestore from '@react-native-firebase/firestore';

export const GET_QUOTES_LOADING = 'GET_QUOTES_LOADING';
export const GET_QUOTES_ERROR = 'GET_QUOTES_ERROR';
export const SET_FAVORITES = 'SET_FAVORITES';
export const GET_DATA = 'GET_DATA';

export const getQuotes = async () => {
  const querySnapshot = await firestore().collection('quotes').get();
  const quotes = [];

  querySnapshot.forEach((documentSnapshot) => {
    quotes.push({
      ...documentSnapshot.data(),
    });
  });

  return quotes;
};

export const getUserData = async (deviceId) => {
  const querySnapshot = await firestore().collection(deviceId).get();
  let userData = {};

  querySnapshot.forEach((documentSnapshot) => {
    userData = documentSnapshot.data();
  });

  return userData;
};

export const getData = async (dispatch, deviceId) => {
  dispatch({ type: GET_QUOTES_LOADING });
  const quotes = await getQuotes();
  const userData = await getUserData(deviceId);
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
