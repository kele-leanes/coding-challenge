import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Rating} from '.';
import {Theme} from '../constants';

const Filter = ({value, onValueChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filter by rating:</Text>
      <Rating votes={value} onPress={onValueChange} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Theme.COLORS.SECONDARY,
    position: 'absolute',
    bottom: 0,
  },
  text: {
    color: Theme.COLORS.WHITE,
  },
});

export default Filter;
