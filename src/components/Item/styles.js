import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.WHITE,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLORS.TERTIARY,
  },
  text: {
    fontWeight: 'bold',
  },
});
