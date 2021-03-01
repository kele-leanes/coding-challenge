import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {Detail} from '../../components';

import {styles} from './styles';

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

export default Details;
