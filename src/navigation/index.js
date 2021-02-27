import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from '../store/store';
import {Provider} from 'react-redux';
import {Home} from '../screens';

const MoviesStack = createStackNavigator();

const screens = [
  {
    name: 'Home',
    component: Home,
  },
];

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MoviesStack.Navigator>
          {screens.map((screen) => (
            <MoviesStack.Screen
              name={screen.name}
              component={screen.component}
            />
          ))}
        </MoviesStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
