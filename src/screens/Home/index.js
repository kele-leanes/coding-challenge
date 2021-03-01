import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Card from '../../components/Card';
import Input from '../../components/Input';
import PresseableIcon from '../../components/PresseableIcon';
import Filter from '../../components/Filter';
import {Theme} from '../../constants';
import {getMovies, getMoviesByName} from '../../store/actions/moviesActions';

import {styles} from './styles';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.movies?.results);
  const isLoading = useSelector((store) => store.movies.loading);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [value, onChangeText] = useState('');
  const [filter, onChangeFilter] = useState(null);

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
      headerRight: () => (
        <PresseableIcon
          name={'search'}
          size={20}
          color={Theme.COLORS.WHITE}
          onPress={() => setShowSearchBar(!showSearchBar)}
        />
      ),
    });
  }, [navigation, showSearchBar]);

  return (
    <SafeAreaView style={styles.container}>
      {showSearchBar && (
        <Input
          placeholder={'Type a title movie...'}
          value={value}
          onChangeText={onChangeText}
        />
      )}
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
      <View style={styles.containerFilter}>
        <Filter value={filter} onValueChange={_onChangefilter} />
      </View>
    </SafeAreaView>
  );
};

export default Home;