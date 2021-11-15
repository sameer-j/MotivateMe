import firestore from '@react-native-firebase/firestore';
import { DEVICE_ID } from '.';

import store from '../../redux/store';

export const getQuotesFromDB = async () => {
  const querySnapshot = await firestore().collection('quotes').get();
  const quotes = [];

  querySnapshot.forEach((documentSnapshot) => {
    quotes.push({
      ...documentSnapshot.data(),
    });
  });

  return quotes;
};

export const getUserDataFromDB = async () => {
  const querySnapshot = await firestore().collection(DEVICE_ID).get();
  let userData = {};

  querySnapshot.forEach((documentSnapshot) => {
    userData = documentSnapshot.data();
  });

  return userData;
};

export const saveUserDataToDB = () => {
  const favorites = store.getState().userData.favorites;
  firestore()
    .collection(DEVICE_ID)
    .doc('1')
    .set({
      favorites: favorites,
    })
    .then(() => {
      console.log('User Data Updated');
    });
};
