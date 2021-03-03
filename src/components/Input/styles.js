import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = StyleSheet.create({
  animatableView: {
    width: '90%',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    height: 30,
    backgroundColor: Theme.COLORS.SECONDARY,
  },
  containerStyle: {
    width: '100%',
    backgroundColor: Theme.COLORS.SECONDARY,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    height: 30,
    backgroundColor: Theme.COLORS.PRIMARY,
    borderRadius: 15,
  },
  input: {
    backgroundColor: Theme.COLORS.PRIMARY,
  },
  titleContainer: {
    width: '80%',
    flex: 6,
    alignItems: 'center',
    alignSelf: 'center',
  },
  emptyView: {
    flex: 1,
  },
  title: {
    color: Theme.COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
