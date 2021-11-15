import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: 'flex-start' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
