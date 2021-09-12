import React from 'react';
import { View } from 'react-native';

import Layout from './components/Layout';
import Home from './modules/home/components';

function App() {
  return (
    <Layout>
      <View>
        <Home />
      </View>
    </Layout>
  );
}

export default App;
