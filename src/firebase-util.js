import messaging from '@react-native-firebase/messaging';

export const firebaseOnMessageListener = () => {
  messaging().onMessage(async (remoteMessage) => {
    alert('A new FCM message arrived!');
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
};

export const firebaseBackgroundNotificationHandler = () => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message handled in the background!', remoteMessage);
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
  console.log('fcm token called!');
  messaging()
    .getToken()
    .then((fcmToken) => {
      console.log('FCM Token -> ', fcmToken);
    });
};
