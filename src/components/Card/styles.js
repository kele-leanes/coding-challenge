import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    flex: 1,
    borderWidth: 1,
    borderColor: Theme.COLORS.PRIMARY,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
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
    height: 100,
  },
  textContainer: {
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
