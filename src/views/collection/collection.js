import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './drawerContent';
import {Image} from 'react-native-elements';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

function Obras({navigation}) {
  return (
    <ScrollView
      style={{
        flex: 1,
        zIndex: 1,
        backgroundColor: '#FFFAF3',
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
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          padding: 10,
        }}>
        <View style={{width: '20%', marginTop: '10%', marginRight: '3%'}}>
          <AutoHeightImage
            style={{borderColor: '#B8874A', borderWidth: 5}}
            width={150}
            source={{
              uri: 'https://mdl.artvee.com/sftb/225239fg.jpg',
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginLeft: '1%',
          }}>
          <View style={{width: '40%', marginTop: '10%'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('IndCol');
              }}>
              <AutoHeightImage
                width={200}
                style={{borderColor: '#B8874A', borderWidth: 5}}
                source={{
                  uri: 'https://mdl.artvee.com/sftb/517354ld.jpg',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '40%', marginTop: '10%'}}>
            <AutoHeightImage
              style={{borderColor: '#B8874A', borderWidth: 5}}
              width={200}
              source={{
                uri: 'https://mdl.artvee.com/sftb/511984ld.jpg',
              }}
            />
          </View>
          <View style={{width: '40%', marginTop: '2%'}}>
            <AutoHeightImage
              style={{borderColor: '#B8874A', borderWidth: 5}}
              width={200}
              source={{
                uri: 'https://mdl.artvee.com/sftb/202443fg.jpg',
              }}
            />
          </View>
          <View style={{width: '40%', marginTop: '2%'}}>
            <AutoHeightImage
              width={200}
              style={{borderColor: '#B8874A', borderWidth: 5}}
              source={{
                uri: 'https://mdl.artvee.com/sftb/501153ld.jpg',
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export const Collection = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Obras}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
