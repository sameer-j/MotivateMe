import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Layout from './components/Layout';
import Navigator from './navigator';
import { LightTheme, DarkTheme } from './themes';
import store from './redux/store';

const config = {
  screens: {
    Home: {
      path: 'quotes/:id?',
      parse: {
        id: (id: string) => `${id}`,
      },
    },
    QuoteListing: 'list-all',
    Settings: 'settings',
  },
};
const linking = {
  prefixes: [
    'https://sameer-j.github.io/quote-delight/',
    'quote-delight://app',
  ],
  config,
};

const App = () => {
  // const systemTheme = useColorScheme();
  const systemTheme = 'light';

  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer linking={linking} theme={LightTheme}>
          <Layout>
            <SafeAreaView style={{ flex: 1 }}>
              <Navigator />
            </SafeAreaView>
          </Layout>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
