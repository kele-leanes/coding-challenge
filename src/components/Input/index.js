import React, {useState} from 'react';

import {SearchBar} from 'react-native-elements';
import PresseableIcon from './../PresseableIcon';
import * as Animatable from 'react-native-animatable';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './styles';
import {Text, View} from 'react-native';

const Input = ({onChangeText, value, placeholder}) => {
  const [showInput, setShowIput] = useState(false);
  const insets = useSafeAreaInsets();
  console.log(value, 'INPUT');
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
      }}>
      {showInput ? (
        <Animatable.View
          style={styles.animatableView}
          animation={'fadeInRight'}
          duration={500}>
          <SearchBar
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.input}
            placeholder={placeholder}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </Animatable.View>
      ) : (
        <>
          <View style={styles.emptyView} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Movie Discover</Text>
          </View>
        </>
      )}
      <View style={styles.emptyView}>
        <PresseableIcon
          name={showInput ? 'close' : 'search'}
          size={20}
          color={'#fff'}
          onPress={() => setShowIput(!showInput)}
        />
      </View>
    </View>
  );
};

export default Input;
