import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {ChatRoom} from '../../../Types';
import styles from './style';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const SearchListItem = props => {
  const {chatRoom} = props;
  const navigation = useNavigation();

  const user = chatRoom.users[1];

  // const {navigation} = props;

  const nav = () => {
    navigation.navigate('ChatRoomScreen');
  };

  return (
    <TouchableWithoutFeedback onPress={nav}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: user.imageUri}} style={styles.avatar} />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchListItem;
