import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import Layout from './components/Layout';
import Navigator from './navigator';
import { LightTheme, DarkTheme } from './themes';

const App = () => {
  // const systemTheme = useColorScheme();
  const systemTheme = 'light';

  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer
      theme={systemTheme === 'dark' ? DarkTheme : LightTheme}>
      <Layout>
        <Navigator />
      </Layout>
    </NavigationContainer>
  );
};

export default App;
