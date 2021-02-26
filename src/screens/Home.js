import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../store/actions/moviesActions';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.movies.results);

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  
  return (
    <View>
      {movies.length > 0 ? (
        movies.map((movie) => <Text>{movie.original_title}</Text>)
      ) : (
        <Text>No se encontraron titulos</Text>
      )}
    </View>
  );
};

export default Home;
