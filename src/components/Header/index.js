import React from 'react';
import {View} from 'react-native';
import Input from '../Input';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './styles';

const Header = ({onChangeText, value, placeholder}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
      }}>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Header;
