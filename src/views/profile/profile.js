import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import BackGround1 from '../../assets/maps/mapa_2.svg';

export const Profile = () => {
  return (
    StatusBar.setHidden(true),
    (
      <View>
        <Text>Profile</Text>
      </View>
    )
  );
};
