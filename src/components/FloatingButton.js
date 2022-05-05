import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles/FloatingStyle';
import {useNavigation} from '@react-navigation/native';

const NewMessageButton = () => {
  const navigation = useNavigation();

  const nav = () => {
    navigation.navigate('ContactScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={nav}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={28}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default NewMessageButton;
