import firestore from '@react-native-firebase/firestore';
import { DEVICE_ID } from '.';

export const getQuotesFromDB = async () => {
  console.log('Fetching quotes from db...');
  const querySnapshot = await firestore()
    .collection('quotes')
    .orderBy('creationTime', 'desc')
    .get();
  const quotes = [];

  querySnapshot.forEach((documentSnapshot) => {
    quotes.push({
      ...documentSnapshot.data(),
    });
  });

  return quotes;
};

export const getUserDataFromDB = async () => {
  console.log('Fetching user data from db....');
  const querySnapshot = await firestore().collection(DEVICE_ID).get();
  let userData = {};

  querySnapshot.forEach((documentSnapshot) => {
    userData = documentSnapshot.data();
  });

  return userData;
};

export const saveUserDataToDB = (favorites) => {
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
