import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';

const favoriteFilledIcon = require('../../assets/favoriteFilled.png');

// TODO: what happens if you remove memo from here?
const QuoteListItem = React.memo(({ item, favorite }) => {
  const { textColor } = useTheme();
  const [expanded, setExpanded] = useState(false);
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        if (expanded) {
          setExpanded(false);
        } else {
          setExpanded(true);
        }
      }}
      activeOpacity={0.8}>
      {favorite && (
        <Image source={favoriteFilledIcon} style={styles.favIconPerItem} />
      )}
      <Text
        numberOfLines={expanded ? null : 2}
        style={{ ...styles.quote, color: textColor.darkest }}>
        {item.quote}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    maxHeight: SCREEN_HEIGHT * 0.75,
    width: SCREEN_WIDTH - 40, // 40 because of right and left margins
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.67)', // overridden by theme color - inline style
    padding: 20,
    // justifyContent: 'space-between',
    marginVertical: 5,
  },
  quote: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#212121', // overridden by theme color - inline style
  },
  favIconPerItem: {
    position: 'absolute',
    top: 5,
    right: 5,
    height: 20,
    width: 20,
  },
});

export default QuoteListItem;
