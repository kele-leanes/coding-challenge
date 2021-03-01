import {StyleSheet, Dimensions} from 'react-native';
import {Theme} from '../../constants';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.COLORS.SECONDARY,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    width: '95%',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    color: 'gray',
    marginTop: 15,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 60,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
  textSignIn: {
    color: 'black',
  },
  textSignup: {
    marginTop: 10,
  },
});
