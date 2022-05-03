import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/Splash';
import Home from './src/Home';
import HomePage from './src/HomePage';
import ChatRoomScreen from './src/data/ChatRoomScreen';

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#B983FF',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <stack.Screen name="HomePage" component={HomePage} />

        <stack.Screen name="Splash" component={Splash} />

        <stack.Screen name="Home" component={Home} />

        <stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
