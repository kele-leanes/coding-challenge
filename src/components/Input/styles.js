import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Theme.COLORS.SECONDARY,
  },
  containerStyle: {
    width: '100%',
    backgroundColor: Theme.COLORS.SECONDARY,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    height: 30,
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  input: {
    backgroundColor: Theme.COLORS.PRIMARY,
  },
});
