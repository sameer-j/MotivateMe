import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Layout from './components/Layout';
import Navigator from './navigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer theme={MyTheme}>
      <Layout>
        <Navigator />
      </Layout>
    </NavigationContainer>
  );
};

export default App;
