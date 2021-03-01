import React from 'react';
import {View} from 'react-native';
import RegisterForm from './components/RegisterForm';

import {styles} from './styles';

const Signup = (props) => {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};
export default Signup;
