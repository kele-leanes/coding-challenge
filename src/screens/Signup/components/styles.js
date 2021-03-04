import {StyleSheet} from 'react-native';
import {Theme} from '../../../constants';

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSignIn: {
    fontSize: 15,
    color: Theme.COLORS.PRIMARY,
  },
  pss: {
    marginTop: 35,
  },
  btn: {
    backgroundColor: Theme.COLORS.BACKGROUND,
    marginTop: 15,
  },

  textError: {
    width: '100%',
    height: 50,
    color: 'pink',

    padding: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
  backBtn: {
    color: '#c2c2c2',
  },
  icon: {
    marginTop: 40,
  },
});
