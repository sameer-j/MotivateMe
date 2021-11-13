import React, { useEffect, useRef, useState } from 'react';
import { AppState, ActivityIndicator, View, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUniqueId } from 'react-native-device-info';
import notifee from '@notifee/react-native';

import Footer from './components/Footer';
import QuoteCardCarousel from './components/QuoteCardCarousel';

import { getData } from '../../redux/actions';
import { saveUserDataToDB } from '../utils/dbQuery';

function Home({ route }) {
  const quotes = useSelector(({ quotes }) => quotes.data);
  const loading = useSelector(({ quotes }) => quotes.loading);
  const error = useSelector(({ quotes }) => quotes.error);

  const dispatch = useDispatch();
  const deviceId = getUniqueId();

  console.log('params: ', route.params?.id);
  let initialScrollIndex = parseInt(route.params?.id);

  console.log('home re-rendered!');

  useEffect(() => {
    notifee.getInitialNotification().then((notification) => {
      if (notification) {
        console.log('here4444345');
        console.log(notification.notification.data.quoteId);
        // navigation.navigate('Home', {
        //   id: notification.notification.data.quoteId,
        // });
        initialScrollIndex.current = parseInt(
          notification.notification.data.quoteId,
        );
      }
      // getData(dispatch, deviceId);
    });
    // initialScrollIndex.current = parseInt('7');
    getData(dispatch, deviceId);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'background') {
        console.log('App has come to the background!');
        saveUserDataToDB(deviceId);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size={100} />
      </View>
    );
  }

  if (error) {
    ToastAndroid.showWithGravity(
      'Error Fetching Quotes from Server',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <QuoteCardCarousel
        quotes={quotes}
        initialScrollIndex={initialScrollIndex}
      />
      <View style={{ justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

export default Home;
