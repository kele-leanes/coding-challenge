import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Theme} from '../../constants';
import {styles} from './styles';

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
  return <View style={styles.container}>{getRating(votes)}</View>;
};

export default Rating;
