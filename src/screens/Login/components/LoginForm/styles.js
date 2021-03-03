import {StyleSheet} from 'react-native';
import {Theme} from '../../../../constants';

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  footer: {
    flex: 7,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '95%',
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#222831',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
  },
  signIn: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSignIn: {
    fontSize: 15,
  },
  btn: {
    backgroundColor: Theme.COLORS.BACKGROUND,
    marginTop: 20,
  },
  btnFacebook: {
    backgroundColor: '#3b5998',
    marginTop: 20,
  },
  pss: {
    marginTop: 35,
  },
  forget: {
    color: '#009bd1',
    marginTop: 15,
  },
  textBtn: {
    color: Theme.COLORS.PRIMARY,
  },
  textBtnF: {
    color: 'white',
  },
  facebook: {
    fontWeight: 'bold',
  },
  error: {
    justifyContent: 'center',

    alignItems: 'center',
  },
  textError: {
    width: '80%',
    height: 50,
    color: Theme.COLORS.WHITE,
    textAlign: 'center',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: Theme.COLORS.TERTIARY,
    marginBottom: 20,
  },
});
