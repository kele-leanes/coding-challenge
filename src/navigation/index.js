import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from '../store/store';
import {Provider} from 'react-redux';
import {Home, Onboarding, Login, Signup} from '../screens';

const MoviesStack = createStackNavigator();

const screens = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Onboarding',
    component: Onboarding,
  },
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Signup',
    component: Signup,
  },
];

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MoviesStack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false,
          }}>
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
