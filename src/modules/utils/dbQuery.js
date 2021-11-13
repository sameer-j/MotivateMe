import firestore from '@react-native-firebase/firestore';

import store from '../../redux/store';

const QUOTES = 'quotes';
const QUOTES_SIZE = 'quotesSize';

export const saveUserDataToDB = (deviceId) => {
  const favorites = store.getState().userData.favorites;
  firestore()
    .collection(deviceId)
    .doc('1')
    .set({
      favorites: favorites,
    })
    .then(() => {
      console.log('User Data Updated');
    });
};

export const totalQuotesInDB = async () => {
  const documentSnapshot = await firestore()
    .collection(QUOTES_SIZE)
    .doc('quotes')
    .get();
  return documentSnapshot.data().count;
};

export const getQuoteFromDB = async (id) => {
  const documentSnapshot = await firestore().collection(QUOTES).doc(id).get();
  return documentSnapshot.data().quote;
};
