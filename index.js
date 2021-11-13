/**
 * @format
 */

// Turning off console logs in production environment
console.log('Environment __DEV__ : ', __DEV__);
if (!__DEV__) {
  console.log = () => {};
}

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
