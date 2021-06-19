import React, {useState} from 'react';
import {
  Modal,
  Text,
  View,
  Input,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import SeetingsIcon from '../../assets/icons/settings.svg';
import MusicIcon from '../../assets/icons/music.svg';
import BellIcon from '../../assets/icons/bell.svg';
import MuseumTitle from '../../assets/media/museumTittle.svg';
import MapL1 from '../../assets/maps/mapL1.svg';
import MapL2 from '../../assets/maps/mapL2.svg';
import Desc from '../../assets/maps/description.svg';
import {MapStyles} from './styles/map-styles';
import {Avatar, Icon} from 'react-native-elements';
export const Map = ({navigation}) => {
  const [museumName, setMuseumName] = useState('Museo Name');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{height: '100%'}}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '25%',
            padding: 10,
            marginLeft: 'auto',
            marginTop: '10%',
            marginRight: 'auto',
            borderRadius: 10,
          }}>
          <Text style="black">Editar Nombre</Text>
          <Input
            defaultValue={museumName}
            onChangeText={e => {
              setMuseumName(e);
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '10%',
            }}>
            <Button
              onPress={() => {
                setModalVisible(false);
              }}
              title="Cancel"
              color="pink"
            />
            <Button
              title="Save"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={{padding: 10}}>
          <Text style={{zIndex: 1, paddingTop: 15, paddingLeft: 30}}>
            {museumName}
          </Text>
          <View style={{position: 'absolute', padding: 10}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <MuseumTitle />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{padding: 20}}>
          <Avatar
            onPress={() => {
              navigation.navigate('Profile');
            }}
            size={50}
            rounded
            source={{
              uri: 'https://www.holland.com/upload_mm/2/5/2/56781_fullimage_vincent_van_gogh.jpg',
            }}
          />
        </View>
      </View>
      <View style={MapStyles.backgroudImage}>
        <Icon
          name="chevron-left"
          color="white"
          size={50}
          type="font-awesome-5"
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '80%',
            height: '60%',
            alignItems: 'center',
            marginTop: '15%',
          }}>
          <MapL1 />
          <View style={{alignSelf: 'flex-start'}}>
            <MapL2 />
          </View>
          <MapL1 />
          <View style={{alignSelf: 'flex-start'}}>
            <MapL2 />
          </View>
        </View>
        <Icon
          name="chevron-right"
          color="white"
          size={50}
          type="font-awesome-5"
        />
      </View>

      <View style={{...MapStyles.confIconsWrapper, zIndex: 9}}>
        <View style={{flexDirection: 'row'}}>
          <Desc />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Collection');
            }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 100,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/HhSgYFs.png'}}
                style={{width: 40, height: 40}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Map');
            }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 100,
                marginLeft: 10,
              }}>
              <Image
                source={{uri: 'https://i.imgur.com/4lZmHNg.png'}}
                style={{width: 40, height: 40}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
