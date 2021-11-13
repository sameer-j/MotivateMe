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
import notifee from '@notifee/react-native';

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;

  // Check if the user pressed the "Mark as read" action
  // if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
  //   // Update external API
  //   await fetch(`https://my-api.com/chat/${notification.data.chatId}/read`, {
  //     method: 'POST',
  //   });

  //   // Remove the notification
  //   await notifee.cancelNotification(notification.id);
  // }
  // console.log('Notifee Background notification: ', notification);
  // console.log('...................................');
  // let nots = await notifee.getDisplayedNotifications();
  // for (let n of nots) {
  //   console.log(JSON.stringify(n));
  //   console.log(n.id, n.android);
  // }
  await notifee.cancelDisplayedNotification('0');
});

AppRegistry.registerComponent(appName, () => App);
