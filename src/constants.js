import { Dimensions } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

export const QUOTES_URL =
  'https://firestore.googleapis.com/v1/projects/quote-delight-motivation/databases/(default)/documents/quotes';
