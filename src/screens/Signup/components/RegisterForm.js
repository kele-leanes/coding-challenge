import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addUserAction} from '../../../store/actions/usersActions';

import {Form, Field} from 'react-final-form';

import {styles} from './styles';

const RegisterForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPss, setConfirmPss] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [repeatPass, setRepeatPass] = useState(true);

  //TODO: move validation to redux before the navigate
  // const validation = () => {
  //   if (!name || !email || !password || !confirmPss) {
  //     setError('All fields are required');
  //     return;
  //   }
  //   if (!validateEmail(email)) {
  //     setError('Enter a valid e-mail');
  //     return;
  //   }
  //   if (password.length < 6) {
  //     setError('The password must be greater than six digits');
  //     return;
  //   }
  //   if (password !== confirmPss) {
  //     setError('Passwords must be the same ');
  //     return;
  //   } else {
  //     setError('Form Ok :-) !!');
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  //     setConfirmPss('');
  //     setError(null);
  //     return;
  //   }
  // };

  return (
    <Form
      onSubmit={() =>
        dispatch(addUserAction(email, password, navigation.navigate('Home')))
      }
      render={({handleSubmit}) => (
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.text_header}>
              Take few moment to register before to see a movie
            </Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action}>
              <FontAwesome name="id-card" color="#222831" size={20} />
              <Field
                name="Name"
                label="Name"
                component={TextInput}
                placeholder="your name"
                style={styles.textInput}
                onChange={(e) => setName(e.nativeEvent.text)}
                value={name}
              />
              <Feather name="check-circle" color="#222831" size={20} />
            </View>
            <Text style={styles.text_footer}>E-Mail</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#222831" size={20} />
              <Field
                name="email"
                label="Email"
                component={TextInput}
                placeholder="your email"
                style={styles.textInput}
                onChange={(e) => setEmail(e.nativeEvent.text)}
                value={email}
              />
              <Feather name="check-circle" color="#222831" size={20} />
            </View>
            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#222831" size={20} />
              <Field
                name="Password"
                label="Password"
                component={TextInput}
                placeholder="select a password bigger than 6 digits"
                style={styles.textInput}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                value={password}
                secureTextEntry={showPassword}
              />
              <Feather
                name={showPassword ? 'eye-off' : 'eye'}
                color="#222831"
                size={20}
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
            <Text style={[styles.text_footer, styles.pss]}>
              Confirm password
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#222831" size={20} />
              <Field
                name="Password"
                label="Confirm password"
                component={TextInput}
                placeholder="confirm your password"
                style={styles.textInput}
                onChange={(e) => setConfirmPss(e.nativeEvent.text)}
                value={confirmPss}
                secureTextEntry={repeatPass}
              />
              <Feather
                name={repeatPass ? 'eye-off' : 'eye'}
                color="#222831"
                size={20}
                onPress={() => setRepeatPass(!repeatPass)}
              />
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={[styles.signIn, styles.btn]}>
                <Text style={styles.textSignIn}>Register</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Feather
                name="arrow-left"
                color="#222831"
                size={20}
                style={styles.icon}
                onPress={() => navigation.navigate('Login')}
              />
              <Text style={styles.backBtn}>Back</Text>
            </View>
            {error && (
              <View style={styles.error}>
                <Text style={styles.textError}>{error}</Text>
              </View>
            )}
          </Animatable.View>
        </ScrollView>
      )}
    />
  );
};
export default RegisterForm;
