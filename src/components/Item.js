import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Theme} from '../constants';

const Item = ({movieInfo, navigation}) => {
  const {title} = movieInfo;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {movieInfo})}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.WHITE,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLORS.TERTIARY,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default Item;
