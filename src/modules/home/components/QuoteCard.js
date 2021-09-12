import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const ITEM_WIDTH = Dimensions.get('window').width;

function QuoteCard({ quote }) {
  return (
    <View style={[styles.card]}>
      <Text>{quote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '100%',
    width: ITEM_WIDTH,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.67)',
    padding: 10,
  },
});

export default QuoteCard;
