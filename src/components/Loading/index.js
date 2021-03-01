import React from 'react';
import {View, Text, ActivityIndicator, Modal} from 'react-native';

import {styles} from './styles';

export default function Loading(props) {
  const {isVisible, text} = props;
  return (
    <Modal
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#006a80" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Modal>
  );
}
