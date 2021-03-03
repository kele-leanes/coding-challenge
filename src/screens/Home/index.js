import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
  BackHandler,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Card from '../../components/Card';
import Input from '../../components/Input';
import PresseableIcon from '../../components/PresseableIcon';
import Filter from '../../components/Filter';
import {Theme} from '../../constants';
import {getMovies, getMoviesByName} from '../../store/actions/moviesActions';

import {styles} from './styles';
import Header from '../../components/Header';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.movies?.results);
  const isLoading = useSelector((store) => store.movies.loading);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [value, onChangeText] = useState('');
  const [filter, onChangeFilter] = useState(null);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  const _onChangefilter = (val) => {
    onChangeFilter(val === filter ? null : val);
  };

  const filterByRating = (rating) => {
    let filteredMovies;
    if (rating !== null) {
      filteredMovies = movies?.filter(
        (movie) =>
          movie.vote_average < (rating + 1) * 2 &&
          movie.vote_average >= (rating + 1) * 2 - 1,
      );
    } else {
      filteredMovies = movies;
    }
    return filteredMovies;
  };

  const moviestoShow = useMemo(() => filterByRating(filter), [
    filter,
    value,
    movies,
  ]);

  useEffect(() => {
    if (value.length) {
      dispatch(getMoviesByName(value));
    } else {
      dispatch(getMovies());
    }
  }, [dispatch, value]);

  const RenderItem = ({item}) => {
    return <Card movieInfo={item} navigation={navigation} />;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          placeholder={'Type a title movie...'}
          value={value}
          onChangeText={onChangeText}
        />
      ),
    });
  }, [navigation, showSearchBar, value]);

  return (
    <SafeAreaView style={styles.container}>
      <Filter value={filter} onValueChange={_onChangefilter} />
      {!isLoading ? (
        moviestoShow.length > 0 ? (
          <FlatList
            data={moviestoShow}
            keyExtractor={(item) => item.id.toString()}
            style={styles.flatList}
            renderItem={RenderItem}
          />
        ) : (
          <Text style={styles.alert}>No movies found</Text>
        )
      ) : (
        <ActivityIndicator size={20} color={Theme.COLORS.WHITE} />
      )}
    </SafeAreaView>
  );
};

export default Home;
