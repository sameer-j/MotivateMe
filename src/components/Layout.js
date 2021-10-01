import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const staticImage = require('../assets/background.png');

const Layout = ({ children }) => (
  <View style={styles.container}>
    <ImageBackground
      source={staticImage}
      resizeMode="cover"
      style={styles.image}>
      {children}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBCBB5',
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Layout;
