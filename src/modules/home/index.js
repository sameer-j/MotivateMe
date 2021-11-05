import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import Footer from './components/Footer';
import QuoteCardCarousel from './components/QuoteCardCarousel';

import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../../redux/actions';

function Home() {
  const quotes = useSelector(({ quotes }) => quotes.data);
  const loading = useSelector(({ quotes }) => quotes.loading);
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

  return (
    <View style={{ flex: 1 }}>
      <QuoteCardCarousel quotes={Object.values(quotes)} />
      <View style={{ justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

export default Home;
