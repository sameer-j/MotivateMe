import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import Footer from './components/Footer';
import QuoteCardCarousel from './components/QuoteCardCarousel';

import { getParsedFirestoreJSON } from '../../util';

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  const getQuotesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://firestore.googleapis.com/v1/projects/quote-delight-motivation/databases/(default)/documents/quotes',
      );
      const json = await response.json();
      setQuotes(getParsedFirestoreJSON(json.documents));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuotesFromApiAsync();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size={100} />
      </View>
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
