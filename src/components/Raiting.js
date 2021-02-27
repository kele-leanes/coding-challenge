import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Theme} from '../constants';

const Rating = ({votes}) => {
  const getRaiting = (raitng) => {
    const elemArrey = [];
    const raitingToFive = (raitng / 2).toFixed(0);
    for (let i = 0; i < 5; i++) {
      if (i < raitingToFive) {
        elemArrey.push(
          <Icon name="star" size={20} color={Theme.COLORS.TERTIARY} />,
        );
      } else {
        elemArrey.push(
          <Icon name="star-o" size={20} color={Theme.COLORS.TERTIARY} />,
        );
      }
    }
    return elemArrey;
  };
  return <View style={style.container}>{getRaiting(votes)}</View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Rating;
