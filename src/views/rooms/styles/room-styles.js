import {StyleSheet} from 'react-native';

export const RoomStyles = StyleSheet.create({
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
    backgroundColor: '#9B7042',
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
