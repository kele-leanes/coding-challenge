import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Rating from '../Rating';

import {styles} from './styles';

const Card = ({movieInfo, navigation}) => {
  const {
    title,
    overview,
    poster_path: poster,
    release_date: releaseDate,
    vote_average: votes,
  } = movieInfo;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {movieInfo})}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={{uri: 'https://image.tmdb.org/t/p/w780' + poster}}
          />
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text
            numberOfLines={2}
            ellipsizeMode={'tail'}
            style={styles.description}>
            {overview}
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>Rating: </Text>
          <Rating votes={Math.round(votes / 2) - 1} />
          <Text style={styles.text}>Release Date: {releaseDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
