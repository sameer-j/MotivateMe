import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import store from '../../redux/store';
import { getQuoteFromDB, totalQuotesInDB } from './dbQuery';
import { getRandomInt } from '.';

export const firebaseOnMessageListener = (onRemoteNotification) => {
  messaging().onMessage(async (remoteMessage) => {
    alert('A new FCM message arrived!');
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    onRemoteNotification();
  });
};

const onRemoteNotification = async () => {
  const { quote, quoteId } = await fetchRandomQuote();
  const quoteOfTheDay = {
    title: 'Quote of the Day!',
    body: quote,
    data: { quoteId },
  };
  await pushLocalNotification(quoteOfTheDay);
  await removeFirebaseNotification();
};

const fetchRandomQuote = async () => {
  const totalQuotes = await totalQuotesInDB();
  const quoteId = getRandomInt(totalQuotes).toString();
  return { quote: await getQuoteFromDB(quoteId), quoteId };
};

const pushLocalNotification = async ({ title, body, data }) => {
  // Create a channel
  const channelId = await notifee.createChannel({
    id: 'Main',
    name: 'Main',
    sound: 'default',
  });

  // Display a notification
  await notifee.displayNotification({
    title,
    body,
    data,
    android: {
      channelId,
      smallIcon: 'notification',
      color: '#9c27b0', // TODO: change this from constants/theme
      sound: 'hollow',
      pressAction: {
        id: 'default',
        launchActivity: 'default',
      },
    },
  });
};

const removeFirebaseNotification = async () => {
  let displayedNotifications = await notifee.getDisplayedNotifications();
  // find the one for tag
  const displayed = displayedNotifications.find(({ notification }) => {
    if (notification.android?.tag) {
      console.log('found tag: ', notification.android?.tag);
      return true;
    }
    return false;
  });

  if (displayed) {
    await notifee.cancelDisplayedNotification(
      displayed.id,
      displayed.notification?.android?.tag,
    );
  }
};

export const firebaseBackgroundNotificationHandler = () => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    await onRemoteNotification();
  });
};

export const firebaseRequestUserPermission = async () => {
  /**
   * On iOS, messaging permission must be requested by
   * the current application before messages can be
   * received or sent
   */
  const authStatus = await messaging().requestPermission();
  console.log('Authorization status(authStatus):', authStatus);
  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
};

export const firebaseLogFCMToken = () => {
  messaging()
    .getToken()
    .then((fcmToken) => {
      console.log('FCM Token -> ', fcmToken);
    });
};
