import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Input, PresseableIcon} from '../components';
import {Theme} from '../constants';
import {getMovies} from '../store/actions/moviesActions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.movies?.results);
  const isLoading = useSelector((store) => store.movies.loading);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const RenderItem = ({item}) => {
    return <Card movieInfo={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isLoading ? (
        movies.length > 0 ? (
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            style={{flex: 1}}
            renderItem={RenderItem}
          />
        ) : (
          <Text>No se encontraron titulos</Text>
        )
      ) : (
        <ActivityIndicator size={20} color={Theme.COLORS.WHITE} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.BACKGROUND,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
