import {StyleSheet} from 'react-native';

export const MapStyles = StyleSheet.create({
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
  backgroudMap: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  backgroudImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 50,
    paddingLeft: 50,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    padding: 15,
  },
});
