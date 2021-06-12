import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const RoomCard = ({index, total, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Room', {id: index, total: total});
      }}>
      <View style={styles.container}>
        <Text style={{color: 'white', marginBottom: '5%', fontWeight: 'bold'}}>
          Habitacion {index}
        </Text>
        {index === 1 ? <Icon name="lock-open" /> : <Icon name="lock" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#45B39C',
    margin: 7,
    display: 'flex',
    flexDirection: 'column',
    padding: 35,
    borderRadius: 10,
  },
});
