import React from 'react';
import { View } from 'react-native';
import Footer from './components/Footer';
import QuoteCardCarousel from './components/QuoteCardCarousel';

import { QUOTES } from '../../data/quotes';

function Home() {
  return (
    <View style={{ flex: 1 }}>
      <QuoteCardCarousel quotes={QUOTES} />
      <View style={{ justifyContent: 'flex-end' }}>
        <Footer />
      </View>
    </View>
  );
}

export default Home;
