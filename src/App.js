import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import PushNotification from 'react-native-push-notification';

import Layout from './components/Layout';
import Navigator from './navigator';
import { LightTheme, DarkTheme } from './themes';
import store from './redux/store';

const App = () => {
  // const systemTheme = useColorScheme();
  const systemTheme = 'light';

  useEffect(() => {
    SplashScreen.hide();
    createChannel();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <NavigationContainer
          theme={systemTheme === 'dark' ? DarkTheme : LightTheme}>
          <Layout>
            <Navigator />
          </Layout>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

// TODO: writing it here vs in the App function?
const createChannel = () => {
  PushNotification.createChannel({
    channelId: 'default-channel',
    channelName: 'Default Channel',
  });
};

// TODO: why create service?

export default App;
