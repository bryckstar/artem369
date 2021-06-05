import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './drawerContent';
import {Image} from 'react-native-elements';

const Drawer = createDrawerNavigator();

function Obras({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      }}>
      <Image
        source={{uri: 'https://i.imgur.com/w3KMs62.png'}}
        style={{
          width: 770,
          height: 300,
        }}
      />
    </View>
  );
}
export const Collection = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Obras}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
