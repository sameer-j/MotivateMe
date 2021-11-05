import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import Footer from './components/Footer';
import QuoteCardCarousel from './components/QuoteCardCarousel';

import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../../redux/actions';

function Home() {
  const quotes = useSelector((state) => state.quotes);
  const isFetching = useSelector((state) => state.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchQuotes(dispatch);
  }, []);

  if (isFetching) {
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
