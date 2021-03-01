import React from 'react';

import {SearchBar} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';

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

export default Input;
