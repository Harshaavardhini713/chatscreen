import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  ListView,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {
  Container,
  Button,
  Left,
  Right,
  Icon,
  Text,
  Content,
  NativeBaseProvider,
  ListItem,
  Thumbnail,
  Body,
  Badge,
} from 'native-base';
import ChatListItem from '../components/ChatRoomItem/ChatRoomItem';

import chatRooms from './chatRoom';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={chatRooms}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
