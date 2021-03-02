import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Rating from '../Rating';

import {styles} from './styles';

const Card = ({movieInfo, navigation}) => {
  const {
    title,
    poster_path: poster,
    release_date: releaseDate,
    vote_average: votes,
  } = movieInfo;
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={{uri: 'https://image.tmdb.org/t/p/w780' + poster}}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingWrapper}>
          <Text style={styles.text}>Rating: </Text>
          <Rating votes={Math.round(votes / 2) - 1} />
        </View>
        <Text style={styles.text}>Release Date: {releaseDate}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {movieInfo})}>
          <Text style={styles.text}>See More...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
