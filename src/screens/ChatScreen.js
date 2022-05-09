import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Image,
  ListView,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import ChatListItem from '../components/ChatListItem/ChatListItem';

import chatRooms from '../data/chatRoom';
import instance from '../config/axiosConfig';

export default function ChatScreen() {
  // const getChats = async () => {
  //   console.log('in getchats');
  //   try {
  //     const params = JSON.stringify({
  //       id: '62749fbebc271b934153e3d6',
  //     });
  //     const response = await instance.post('api/v1/chat/getUserChat', params);
  //     if (response.status === 201 || response.status === 200) {
  //       console.log('response:');
  //       console.log(response.data);
  //       return res => response.data;
  //     } else {
  //       console.log(
  //         `Couldn't find any chats: ${JSON.stringify(response.data)}`,
  //       );
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       console.log('error.response.data');
  //       console.log(error.response.data);
  //     } else if (error.request) {
  //       console.log('error.request');
  //       console.log(error.request);
  //     } else {
  //       console.log('Error:', error.message);
  //     }
  //   }
  // };
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
