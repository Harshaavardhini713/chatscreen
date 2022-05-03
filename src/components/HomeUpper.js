import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../data/ChatScreen';

// function ChatScreen1() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>ChatScreen</Text>
//       <ChatScreen/>
//     </View>
//   );
// }

function StatusScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Status!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function UpperMenu() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarShowIcon: true,
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: '#B983FF',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={ChatScreen}
        options={{
          tabBarBadge: () => {
            return (
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 100,
                  padding: 1,
                  borderWidth: 2,
                  borderColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 16,
                  right: 23,
                  size: 2,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '900',
                    color: '#B983FF',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  3
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Group"
        component={StatusScreen}
        options={{title: 'Groups'}}
      />
    </Tab.Navigator>
  );
}
