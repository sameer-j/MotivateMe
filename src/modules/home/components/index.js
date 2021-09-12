import React from 'react';
import { View } from 'react-native';
import Footer from './Footer';
import QuoteCardCarousel from './QuoteCardCarousel';

import { QUOTES } from '../../../data/quotes';

function Home() {
  return (
    <View>
      <QuoteCardCarousel quotes={QUOTES} />
      <Footer />
    </View>
  );
}

export default Home;
