import React from 'react';
import {View, Text, Image} from 'react-native';

import Rating from '../Rating';
import {styles} from './styles';

const Detail = ({movieInfo}) => {
  const {
    title,
    poster_path: poster,
    overview,
    release_date: releaseDate,
    vote_average: votes,
    popularity,
  } = movieInfo;
  return (
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
        <Text style={styles.description}>{overview}</Text>
      </View>
      <View style={styles.footer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Rating: </Text>
          <Rating votes={votes} />
        </View>
        <Text style={styles.text}>Release Date: {releaseDate}</Text>
        <Text style={styles.text}>Popularity: {popularity}</Text>
      </View>
    </View>
  );
};

export default Detail;
