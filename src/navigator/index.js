import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../modules/home';
import QuoteListing from '../modules/quoteListing';
import Settings from '../modules/settings';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="QuoteListing" component={QuoteListing} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default Navigator;
