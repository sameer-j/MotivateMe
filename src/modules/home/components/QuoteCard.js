import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
const quoteIcon = require('../assets/quote.png');
const favoriteEmptyIcon = require('../assets/favoriteEmpty.png');
const favoriteFilledIcon = require('../assets/favoriteFilled.png');

function QuoteCard({ quote }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <View style={styles.card}>
      <View>
        <Image style={styles.quoteIcon} source={quoteIcon} />
        <Text style={styles.quote}>{quote.quote}</Text>
      </View>
      <View style={styles.quoteFooter}>
        <Text style={styles.quoteCategory}>
          #{quote.category.toUpperCase()}
        </Text>
        <Pressable onPress={() => setFavorite(!favorite)}>
          <Image source={favorite ? favoriteFilledIcon : favoriteEmptyIcon} />
        </Pressable>
      </View>
    </View>
  );
}

// TODO: implement favorite check for each user
// const isFavorite = (quoteId) => {
//   return favorite;
// };

const toggleFavorite = (favorite) => {
  setFavorite(!favorite);
};

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
    justifyContent: 'space-between',
  },
  quote: {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontSize: 31,
    fontWeight: '500',
    marginTop: -30,
  },
  quoteFooter: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quoteCategory: {
    color: '#77891A',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});

export default QuoteCard;
