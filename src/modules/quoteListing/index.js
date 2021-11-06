import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';
import BackButton from '../../components/BackButton';
import QuoteListEmptyView from '../../components/QuoteListEmptyView';

const QuoteListing = () => {
  const quotes = useSelector(({ quotes }) => quotes.data);
  const favorites = useSelector(({ quotes }) => quotes.favorites);
  return (
    <View style={{ marginTop: 70, flex: 1 }}>
      <View style={{ paddingHorizontal: 10 }}>
        <BackButton />
      </View>
      <View style={styles.quoteListBody}>
        <FlatList
          data={Object.values(quotes)}
          renderItem={({ item }) => (
            <QuoteListItem item={item} favorite={favorites[item.id]} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          ListEmptyComponent={<QuoteListEmptyView />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteListBody: {
    paddingHorizontal: 20,
    maxHeight: SCREEN_HEIGHT * 0.9,
    flex: 1,
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
