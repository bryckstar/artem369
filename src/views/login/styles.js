import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  viewWrapper: {
    height: '100%',
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  dataWrapper: {
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  formWrapper: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flexBasis: '100%',
    paddingBottom: 50,
    borderRadius: 10,
    width: '80%',
    height: '100%',
    marginTop: '3%',
    marginBottom: '4%',
    marginLeft: '5%',
    marginRight: '10%',
  },
  input: {
    borderBottomWidth: 1,
  },
  registerLink: {
    textDecorationLine: 'underline',
    fontSize: 15,
    marginBottom: '1%',
    color: '#02183d',
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#02183d',
    margin: '5%',
  },
});
