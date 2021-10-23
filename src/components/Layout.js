import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const staticImage = require('../assets/background.png');

const Layout = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.layoutBackground }}>
      <ImageBackground
        source={staticImage}
        resizeMode="cover"
        style={{ flex: 1 }}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Layout;
