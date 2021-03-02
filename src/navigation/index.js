import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import store from '../store/store';
import {Provider} from 'react-redux';
import {Home, Details, Onboarding, Login, Signup} from '../screens';
import {Theme} from '../constants';
import {View} from 'react-native';

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
    options: () => ({
      title: 'Movie Discover',
      gestureEnabled: false,
      headerLeft: () => <View />,
      ...styles,
    }),
  },
  {
    name: 'Details',
    component: Details,
    options: {
      headerRight: () => <View />,
      headerBackTitleVisible: false,
      title: 'Details',
      ...styles,
    },
  },
  {
    name: 'Onboarding',
    component: Onboarding,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Signup',
    component: Signup,
    options: {
      headerShown: false,
    },
  },
];

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MoviesStack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
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
