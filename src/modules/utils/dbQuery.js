import firestore from '@react-native-firebase/firestore';

import store from '../../redux/store';

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
