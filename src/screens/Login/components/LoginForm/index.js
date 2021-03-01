import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {loginUserAction} from '../../../../store/actions/usersActions';

import {Form, Field} from 'react-final-form';

import {styles} from './styles';

const LoginForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [showPassword, setShowPassword] = useState(true);

  const validation = () => {
    if (!email || !password) {
      setError('All fields are required');
    }
  };

  // const login = useCallback(async () => {
  //   try {
  //     const res = await firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password);
  //     console.log(res.user);
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     console.log(error);
  //     setError('Something goes wrong :(');
  //   }
  // }, [email, navigation, password]);

  return (
    <Form
      onSubmit={() =>
        dispatch(loginUserAction(email, password, navigation.navigate('Home')))
      }
      render={({handleSubmit}) => (
        <>
          <View style={styles.header}>
            <Text style={styles.text_header}>Are you ready ?? </Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.text_footer}>E-Mail</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#222831" size={20} />
              <Field
                name="email"
                label="Email *"
                component={TextInput}
                placeholder="Your email"
                style={styles.textInput}
                onChange={(e) => setEmail(e.nativeEvent.text)}
                value={email}
              />
              <Feather
                name={email ? 'check-circle' : null}
                color="#222831"
                size={20}
              />
            </View>
            <Text style={[styles.text_footer, styles.pss]}>Password</Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#222831" size={20} />
              <Field
                name="Password"
                label="Password"
                placeholder="Your password"
                component={TextInput}
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
            <Text style={styles.forget}>Forget your password?</Text>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={[styles.signIn, styles.btn]}>
                <Text style={[styles.textSignIn, styles.textBtn]}>Log in</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
                style={[styles.signIn, styles.btn]}>
                <Text style={[styles.textSignIn, styles.textBtn]}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log('Facebook')}
                style={[styles.signIn, styles.btnFacebook]}>
                <Text style={[styles.textSignIn, styles.textBtnF]}>
                  Sign up with <Text style={styles.facebook}>Facebook</Text>
                </Text>
              </TouchableOpacity>
            </View>
            {/* <Loading isVisible={isVisibleLoading} text="Iniciando Sesión" /> */}
            {error && (
              <View style={styles.error}>
                <Text style={styles.textError}>{error}</Text>
              </View>
            )}
          </Animatable.View>
        </>
      )}
    />
  );
};

export default LoginForm;
