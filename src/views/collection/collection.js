import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './drawerContent';
import {Image} from 'react-native-elements';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
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
        <View style={{width: '20%', marginTop: '5%'}}>
          <AutoHeightImage
            style={{borderColor: '#B8874A', borderWidth: 5}}
            width={130}
            source={{
              uri: 'http://1.bp.blogspot.com/-Kp7XMrH7Rw0/T2DdbG9IYAI/AAAAAAAAA-k/G_AKPT4jxmA/s1600/314px-David_von_Michelangelo.jpg',
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
          <View style={{width: '40%', marginTop: '5%'}}>
            <AutoHeightImage
              width={200}
              style={{borderColor: '#B8874A', borderWidth: 5}}
              source={{
                uri: 'https://i.pinimg.com/originals/9f/cd/74/9fcd74d337576218aacb3849f84fa356.jpg',
              }}
            />
          </View>
          <View style={{width: '40%', marginTop: '5%'}}>
            <AutoHeightImage
              style={{borderColor: '#B8874A', borderWidth: 5}}
              width={200}
              source={{
                uri: 'https://3.bp.blogspot.com/-n1aZFQN3_OU/WEcVxxHlgOI/AAAAAAAACF4/z_1qV-Qvq90IZpmf9iYiT_Z2bywX70DTACLcB/w1200-h630-p-k-no-nu/387970_3000.jpg',
              }}
            />
          </View>
          <View style={{width: '40%', marginTop: '5%'}}>
            <AutoHeightImage
              style={{borderColor: '#B8874A', borderWidth: 5}}
              width={200}
              source={{
                uri: 'https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2019/08/06/5f15f06fb5e9a.r_d.516-211.jpeg',
              }}
            />
          </View>
          <View style={{width: '40%', marginTop: '5%'}}>
            <AutoHeightImage
              width={200}
              style={{borderColor: '#B8874A', borderWidth: 5}}
              source={{
                uri: 'https://i0.wp.com/plumasatomicas.com/wp-content/uploads/2020/04/Ultima-Cena-Jueves-Santo-Cuadro-Da-Vinci.jpg?resize=1200%2C720&ssl=1',
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
