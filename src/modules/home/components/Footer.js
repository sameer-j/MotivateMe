import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const iconStyle = {
  size: 20,
  color: 'black',
};
function Footer() {
  return (
    <View style={[styles.footer]}>
      <TouchableOpacity style={styles.roundButton}>
        <Icon name="list" size={iconStyle.size} color={iconStyle.color} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.roundButton, styles.roundButtonPrimary]}>
        <Icon
          name="share-2"
          size={iconStyle.size * 1.5}
          color={iconStyle.color}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundButton}>
        <Icon name="settings" size={iconStyle.size} color={iconStyle.color} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    alignItems: 'center',
  },
  roundButton: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#FFEEB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundButtonPrimary: {
    width: 70,
    height: 70,
  },
});

export default Footer;
