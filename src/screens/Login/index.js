import React from 'react';
import {SafeAreaView} from 'react-native';

import {styles} from './styles';

import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  );
};

export default Login;
