import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.WHITE,
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    color: Theme.COLORS.SECONDARY,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  text: {
    color: Theme.COLORS.SECONDARY,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    marginVertical: 10,
  },
  footer: {
    width: '65%',
    marginLeft: 10,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  ratingWrapper: {
    flexDirection: 'row',
  },
});
