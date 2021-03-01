import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from '../store/store';
import {Provider} from 'react-redux';
import {
  Home,
  Details,
  SearchResults,
  Onboarding,
  Login,
  Signup,
} from '../screens';
import {Theme} from '../constants';
import {View} from 'react-native';
import {PresseableIcon} from './../components';

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
    options: ({navigation}) => ({
      title: 'Movie Discover',
      gestureEnabled: false,
      headerLeft: null,
      headerRight: () => (
        <PresseableIcon
          name={'search'}
          size={20}
          color={Theme.COLORS.WHITE}
          onPress={() => navigation.navigate('Search')}
        />
      ),
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
    name: 'Search',
    component: SearchResults,
    options: {
      headerRight: () => <View />,
      headerBackTitleVisible: false,
      title: 'Search Movie',
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
        <MoviesStack.Navigator initialRouteName="Onboarding">
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
