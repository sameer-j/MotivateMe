import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useSelector } from 'react-redux';
import { saveUserDataToDB } from '../dbQuery';

const useBackgroundSave = () => {
  const favorites = useSelector(({ userData }) => userData.favorites);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'background') {
        console.log('App has come to the background!');
        saveUserDataToDB(favorites);
      }
    });

    return () => {
      subscription.remove();
    };
  });
};

export default useBackgroundSave;
