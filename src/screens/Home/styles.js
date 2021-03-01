import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.BACKGROUND,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  alert: {
    fontSize: 20,
    color: Theme.COLORS.WHITE,
    paddingVertical: 20,
  },
  flatlist: {
    flex: 1,
  },
  containerFilter: {
    alignItems: 'center',
    paddingHorizontal: 40,
    position: 'absolute',
    marginTop: 700,
    width: '80%',
  },
});
