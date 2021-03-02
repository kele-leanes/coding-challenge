import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';
import Movies from '../../../assets/Login/01.png';

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={Movies}
          style={styles.logo}
          resizeMode={'stretch'}
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.text}>
            Log in with your account or create a new one.
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.signIn}>
            <Text style={styles.textSignIn}>Log in</Text>
            <MaterialIcons name="navigate-next" color="black" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={[styles.signIn, styles.textSignup]}>
            <Text style={styles.textSignIn}>Sign up</Text>
            <MaterialIcons name="navigate-next" color="black" size={20} />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Onboarding;
