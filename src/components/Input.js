import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Theme} from '../constants';

const Input = ({onChangeText, value, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Theme.COLORS.SECONDARY,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: Theme.COLORS.WHITE,
    borderRadius: 15,
    paddingHorizontal: 10,
    color: Theme.COLORS.PRIMARY,
  },
});

export default Input;
