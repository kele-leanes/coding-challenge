import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {styles} from './styles';

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

export default Item;
