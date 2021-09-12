import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Footer() {
  return (
    <View style={[styles.footer]}>
      <TouchableOpacity>
        <Text>List</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
});

export default Footer;
