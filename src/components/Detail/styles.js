import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    flex: 1,
    borderColor: Theme.COLORS.PRIMARY,
    padding: 10,
  },
  title: {
    color: Theme.COLORS.WHITE,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    position: 'absolute',
    bottom: 10,
    left: 5,
  },
  description: {
    color: Theme.COLORS.WHITE,
    fontStyle: 'italic',
  },
  text: {
    color: Theme.COLORS.WHITE,
  },
  image: {
    width: undefined,
    height: 500,
  },
  textContainer: {
    marginVertical: 10,
  },
  footer: {
    height: 100,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
