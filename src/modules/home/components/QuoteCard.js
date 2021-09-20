import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
const QUOTE_ICON = require('../assets/quote.png');

function QuoteCard({ quote }) {
  return (
    <View style={[styles.card]}>
      <Image style={[styles.quoteIcon]} source={QUOTE_ICON} />
      <Text style={[styles.quote]}>{quote}</Text>
    </View>
  );
}

// TODO: remove hardcoded values
const styles = StyleSheet.create({
  quoteIcon: {
    opacity: 0.7,
    height: 80,
    width: 70,
  },
  card: {
    minHeight: SCREEN_HEIGHT * 0.4,
    width: SCREEN_WIDTH - 40, // 40 because of right and left margins
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.67)',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  quote: {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontSize: 31,
    fontWeight: '500',
    marginTop: -30,
  },
});

export default QuoteCard;
