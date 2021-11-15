import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BackButton from '../../components/BackButton';

const Settings = () => (
  <View style={styles.container}>
    <View style={styles.topBar}>
      <BackButton />
      <Text>Settings Screen</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { marginTop: 70, flex: 1 },
  topBar: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Settings;
