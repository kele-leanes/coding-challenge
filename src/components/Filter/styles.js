import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Theme.COLORS.SECONDARY,
  },
  text: {
    color: Theme.COLORS.WHITE,
  },
});
