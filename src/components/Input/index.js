import React from 'react';

import {SearchBar} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './styles';

const Input = ({onChangeText, value, placeholder}) => {
  const insets = useSafeAreaInsets();
  return (
    <Animatable.View
      animation={'fadeInDown'}
      duration={500}
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
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
