import React, { useEffect } from 'react';
import { ActivityIndicator, View, ToastAndroid } from 'react-native';

import Footer from './components/Footer';
import QuoteCardCarousel from './components/QuoteCardCarousel';

import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../../redux/actions';

function Home() {
  const quotes = useSelector(({ quotes }) => Object.values(quotes.data));
  const loading = useSelector(({ quotes }) => quotes.loading);
  const error = useSelector(({ quotes }) => quotes.error);
  const dispatch = useDispatch();
  console.log('home re-rendered!');

  useEffect(() => {
    fetchQuotes(dispatch);
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
      <QuoteCardCarousel quotes={quotes} />
      <View style={{ justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

export default Home;
