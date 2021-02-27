import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from '../store/store';
import {Provider} from 'react-redux';
import {Home, Details} from '../screens';
import {Theme} from '../constants';

const MoviesStack = createStackNavigator();

const styles = {
  headerStyle: {
    backgroundColor: Theme.COLORS.SECONDARY,
  },
  headerTintColor: Theme.COLORS.WHITE,
  headerTitleStyle: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
};

const screens = [
  {
    name: 'Home',
    component: Home,
    options: {
      title: 'Movies Discover',
      ...styles,
    },
  },
  {
    name: 'Details',
    component: Details,
    options: {
      title: 'Details',
      ...styles,
    },
  },
];

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MoviesStack.Navigator>
          {screens.map((screen) => (
            <MoviesStack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          ))}
        </MoviesStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
