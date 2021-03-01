import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Theme} from '../constants';
import {Rating} from '../components';

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
          <Rating votes={Math.round(votes / 2) - 1} />
        </View>
        <Text style={styles.text}>Release Date: {releaseDate}</Text>
        <Text style={styles.text}>Popularity: {popularity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    flex: 1,
    borderColor: Theme.COLORS.PRIMARY,
    padding: 10,
  },
  title: {
    color: Theme.COLORS.WHITE,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    position: 'absolute',
    bottom: 10,
    left: 5,
  },
  description: {
    color: Theme.COLORS.WHITE,
    fontStyle: 'italic',
  },
  text: {
    color: Theme.COLORS.WHITE,
  },
  image: {
    width: undefined,
    height: 500,
  },
  textContainer: {
    marginVertical: 10,
  },
  footer: {
    height: 100,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default Detail;
