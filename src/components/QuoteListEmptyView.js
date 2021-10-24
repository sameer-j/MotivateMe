import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';

const QuoteListEmptyView = () => {
  const { textColor } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontSize: 20,
          color: textColor.lightest,
          textAlign: 'center',
        }}>
        No Quotes Found
      </Text>
    </View>
  );
};

export default QuoteListEmptyView;
