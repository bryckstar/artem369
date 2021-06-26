import {StyleSheet} from 'react-native';

export const QuizStyles = StyleSheet.create({
  backgroudImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    backgroundColor: '#fffaf3',
    paddingTop: 50,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 50,
    display: 'flex',
    flexDirection: 'column',
  },
  topUtils: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  question: {fontSize: 30, marginTop: 20, marginRight: 230},
});
