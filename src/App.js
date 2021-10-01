import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Layout from './components/Layout';
import Home from './modules/home/components';
import { LightTheme } from './themes/light';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer theme={LightTheme}>
      <Layout>
        <View>
          <Home />
        </View>
      </Layout>
    </NavigationContainer>
  );
};

export default App;
