import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PresseableIcon = ({name, onPress, size, color}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{marginHorizontal: 10}}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default PresseableIcon;
