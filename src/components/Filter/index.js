import React from 'react';
import {Text, View} from 'react-native';
import Rating from '../Rating';
import {styles} from './styles';

const Filter = ({value, onValueChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filter by rating:</Text>
      <Rating votes={value} onPress={onValueChange} />
    </View>
  );
};

export default Filter;
