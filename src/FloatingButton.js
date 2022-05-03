import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/FloatingStyle';

const NewMessageButton = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="plus" size={28} color="white" />
    </View>
  );
};

export default NewMessageButton;
