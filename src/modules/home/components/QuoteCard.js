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
    minHeight: 50,
    width: ITEM_WIDTH - 40, // 40 because of right and left margins
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.67)',
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  quote: {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontSize: 31,
    fontWeight: '500',
  },
});

export default QuoteCard;
