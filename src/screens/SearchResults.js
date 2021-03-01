import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Input, Item} from '../components';
import {Theme} from '../constants';
import {getMoviesByName, setMoviesByName} from '../store/actions/moviesActions';

const SearchResults = ({navigation}) => {
  const dispatch = useDispatch();
  const results = useSelector((store) => store.movies.moviesByName.results);
  const isLoading = useSelector((store) => store.movies.loading);
  const [value, onChangeText] = useState('');

  useEffect(() => {
    if (value.length) {
      dispatch(getMoviesByName(value));
    }
    return () => dispatch(setMoviesByName([]));
  }, [dispatch, value]);

  const RenderItem = ({item}) => {
    return <Item movieInfo={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={'Type a movie title...'}
      />
      {!isLoading ? (
        <FlatList
          data={results}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id.toString()}
          style={{width: '100%'}}
        />
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

export default SearchResults;
