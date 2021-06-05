import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './drawerContent';
import {Image} from 'react-native-elements';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
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
      <TouchableOpacity
        style={{position: 'absolute', zIndex: 1, top: 10, left: 20}}>
        <Icon
          name="search"
          color="black"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </TouchableOpacity>
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
    <Drawer.Navigator drawerType='slide' drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Obras}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
