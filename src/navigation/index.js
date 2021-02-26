import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from '../store/store';
import {Provider} from 'react-redux';
import {Home} from '../screens';

const MoviesStack = createStackNavigator();

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MoviesStack.Navigator>
          <MoviesStack.Screen name="Home" component={Home} />
        </MoviesStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
