import React from 'react';
import {StyleSheet} from 'react-native';
import {Theme} from '../constants';
import {SearchBar} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const Input = ({onChangeText, value, placeholder}) => {
  return (
    <Animatable.View animation={'fadeInDown'} style={styles.container}>
      <SearchBar
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Theme.COLORS.SECONDARY,
  },
  containerStyle: {
    width: '100%',
    backgroundColor: Theme.COLORS.SECONDARY,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    height: 30,
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  input: {
    backgroundColor: Theme.COLORS.PRIMARY,
  },
});

export default Input;
