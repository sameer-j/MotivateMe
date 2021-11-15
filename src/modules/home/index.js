import React, { useEffect } from 'react';
import { View, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Footer from './components/Footer';
import QuoteCardCarousel from './components/QuoteCardCarousel';
import Loader from '../../components/Loader';

import { getData } from '../../redux/actions';
import useBackgroundSave from '../utils/hooks/useBackgroundSave';

function Home({ route }) {
  const quotes = useSelector(({ quotes }) => quotes.data);
  const loading = useSelector(({ quotes }) => quotes.loading);
  const error = useSelector(({ quotes }) => quotes.error);

  const dispatch = useDispatch();

  const initialScrollIndex = parseInt(route.params?.id);

  console.log('home re-rendered!');

  useEffect(() => {
    if (quotes.length == 0) {
      getData(dispatch);
    }
  }, []);

  useBackgroundSave();

  if (loading) {
    return <Loader />;
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
