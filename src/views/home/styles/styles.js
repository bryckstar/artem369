import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
  confIconsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    padding: 20,
  },
  colletionsBook: {
    marginLeft: 'auto',
  },
  backgroudImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    backgroundColor: '#FFCBA8',
  },
  cardsWrapper: {
    width: '70%',
    height: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
