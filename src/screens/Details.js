import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {Theme} from '../constants';
import {Detail} from '../components';

const Details = ({route}) => {
  const {movieInfo} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Detail movieInfo={movieInfo} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    flex: 1,
  },
});

export default Details;
