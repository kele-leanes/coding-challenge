import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Theme} from '../../constants';
import {styles} from './styles';

const Rating = ({votes, onPress}) => {
  const getRating = (raitng) => {
    const elemArray = [];
    const RatingToFive = raitng;
    for (let i = 0; i < 5; i++) {
      if (i <= RatingToFive) {
        elemArray.push(
          <TouchableOpacity
            activeOpacity={onPress ? 0.2 : 1}
            onPress={onPress ? () => onPress(i) : null}
            key={i.toString()}>
            <Icon name="star" size={20} color={Theme.COLORS.TERTIARY} />
          </TouchableOpacity>,
        );
      } else {
        elemArray.push(
          <TouchableOpacity
            activeOpacity={onPress ? 0.2 : 1}
            onPress={onPress ? () => onPress(i) : null}
            key={i.toString()}>
            <Icon name="star-o" size={20} color={Theme.COLORS.TERTIARY} />
          </TouchableOpacity>,
        );
      }
    }
    return elemArray;
  };
  return <View style={styles.container}>{getRating(votes)}</View>;
};

<<<<<<< HEAD:src/components/Rating/index.js
=======
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

>>>>>>> 5ba7651a2c444449539aba844a98eff826f808fa:src/components/Rating.js
export default Rating;
