import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Theme} from '../constants';

const Rating = ({votes}) => {
  const getRating = (raitng) => {
    const elemArray = [];
    const RatingToFive = (raitng / 2).toFixed(0);
    for (let i = 0; i < 5; i++) {
      if (i < RatingToFive) {
        elemArray.push(
          <Icon name="star" size={20} color={Theme.COLORS.TERTIARY} />,
        );
      } else {
        elemArray.push(
          <Icon name="star-o" size={20} color={Theme.COLORS.TERTIARY} />,
        );
      }
    }
    return elemArray;
  };
  return <View style={style.container}>{getRating(votes)}</View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Rating;
