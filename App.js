import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import HomePage from './src/screens/HomePage';
import ChatRoomScreen from './src//screens/ChatRoomScreen';
import ContactScreen from './src/screens/ContactScreen';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import {persistor, store} from './src/redux/store';

const stack = createStackNavigator();

function AppNavigator() {
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

        <stack.Screen name="ContactScreen" component={ContactScreen} />

        <stack.Screen name="Search" component={Search} />

        <stack.Screen name="Profile" component={Profile} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    <AppNavigator />
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
