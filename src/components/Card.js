import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '.';
import {Theme} from '../constants';

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
          <Rating votes={votes} />
          <Text style={styles.text}>Release Date: {releaseDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    flex: 1,
    borderWidth: 1,
    borderColor: Theme.COLORS.PRIMARY,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
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
    height: 100,
  },
  textContainer: {
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default Card;
