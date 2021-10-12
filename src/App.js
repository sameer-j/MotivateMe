import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Layout from './components/Layout';
import Home from './modules/home/components';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Layout>
      <View>
        <Home />
      </View>
    </Layout>
  );
}

export default App;
