import React from 'react';
import {Avatar, Image, Icon} from 'react-native-elements';
import {Button, ImageBackground, Modal, Text, View} from 'react-native';
import SeetingsIcon from '../../assets/icons/settings.svg';
import MusicIcon from '../../assets/icons/music.svg';
import BellIcon from '../../assets/icons/bell.svg';
import BackGround from '../../assets/media/background.svg';
import MuseumTitle from '../../assets/media/museumTittle.svg';
import {HomeStyles} from './styles/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';
import {Input} from 'react-native-elements/dist/input/Input';

export const Home = ({navigation}) => {
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
      <View style={HomeStyles.backgroudImage}>
        <BackGround width={'100%'} height={'100%'} />
      </View>
      <View style={{...HomeStyles.confIconsWrapper, zIndex: 9}}>
        <View style={{flexDirection: 'row',}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Configuration');
            }}>
            <View>
              <SeetingsIcon width={30} height={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Configuration');
            }}>
            <View>
              <MusicIcon width={30} height={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Configuration');
            }}>
            <View>
              <BellIcon width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {
              navigation.navigate('Collection');
            }}>
          <View>
            <Image
              source={{uri: 'https://i.imgur.com/HhSgYFs.png'}}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
