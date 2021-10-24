import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';
import BackButton from '../../components/BackButton';

import { QUOTES } from '../../data/quotes';
import { useTheme } from '@react-navigation/native';

const QuoteListing = () => {
  return (
    <View style={{ marginTop: 70 }}>
      <View style={{ paddingHorizontal: 10 }}>
        <BackButton />
      </View>
      <View style={styles.quoteListBody}>
        <FlatList
          data={QUOTES}
          renderItem={({ item }) => <QuoteListItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const QuoteListItem = React.memo(({ item }) => {
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
      activeOpacity={0.7}>
      <Text
        numberOfLines={expanded ? null : 2}
        style={{ ...styles.quote, color: textColor.darkest }}>
        {item.quote}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  quoteListBody: {
    paddingHorizontal: 20,
    maxHeight: SCREEN_HEIGHT * 0.9,
  },
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
});

export default QuoteListing;
