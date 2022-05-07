import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {ChatRoom} from '../../../Types';
import styles from './style';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import {incremented} from '../../redux/reducer/counterReducer';

const ChatListItem = props => {
  const {chatRoom} = props;
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  const user = chatRoom.users[1];

  const currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();
  var ISTOffset = 330; // IST offset UTC +5:30
  var today = new Date(
    currentTime.getTime() + (ISTOffset + currentOffset) * 60000,
  );
  var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  // const {navigation} = props;

  const nav = () => {
    navigation.navigate('ChatRoomScreen');
  };

  return (
    <TouchableWithoutFeedback onPress={nav}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: user.imageUri}} style={styles.avatar} />
          {!chatRoom.lastMessage.seen ? (
            <>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 100,
                  padding: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 20,
                  left: 350,
                  size: 2,
                  backgroundColor: '#B983FF',
                }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '900',
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  1
                </Text>
              </View>
              {/* {dispatch(incremented())} */}
            </>
          ) : null}
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.lastMessage}>
              {' '}
              {chatRoom.lastMessage.content}{' '}
            </Text>
          </View>
        </View>
        <Text style={styles.time}>
          {!moment(yesterday).isAfter(moment(chatRoom.lastMessage.createdAt))
            ? moment(chatRoom.lastMessage.createdAt).format('hh:mm')
            : moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}{' '}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
