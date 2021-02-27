import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Card} from '../components';
import {Theme} from '../constants';
import {getMovies} from '../store/actions/moviesActions';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.movies?.results);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const RenderItem = ({item}) => {
    const {
      original_title,
      overview,
      poster_path,
      release_date,
      vote_average,
    } = item;
    return (
      <Card
        title={original_title}
        overview={overview}
        poster={poster_path}
        releaseDate={release_date}
        votes={vote_average}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {movies ? (
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
  },
});

export default Home;
