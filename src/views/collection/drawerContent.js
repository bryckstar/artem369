import React from 'react';
import {Button, View} from 'react-native';
import {Text, SearchBar, Icon} from 'react-native-elements';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {DrawerStyles} from './styles';

export function DrawerContent(props) {
  return (
    <DrawerContentScrollView  style={{padding: 10, backgroundColor: 'black'}}>
      <Text h3 style={DrawerStyles.textTittle}>
        Tu colección
      </Text>
      <Text h4 style={DrawerStyles.textTittle}>
        Buscar Obra
      </Text>
      <SearchBar placeholder="Ejemplo Noche..." />
      <Text style={DrawerStyles.textTittle} h4>
        Filtrar por
      </Text>
      <Text h4 style={DrawerStyles.textTittle}>
        Corrientes Artisticas
      </Text>
      <View style={DrawerStyles.itemWrapper}>
        <Icon name="square" solid type="font-awesome-5" color="green" />

        <Text style={DrawerStyles.textItem}>Posimpresionismo</Text>
      </View>
      <View
        style={DrawerStyles.itemWrapper}>
        <Icon name="square" solid type="font-awesome-5" color="red" />

        <Text style={DrawerStyles.textItem}>Modernismo</Text>
      </View>
      <View
        style={DrawerStyles.itemWrapper}>
        <Icon name="square" solid type="font-awesome-5" color="cyan" />
        <Text style={DrawerStyles.textItem}>Renacimiento</Text>
      </View>
      <Text h3 style={DrawerStyles.textTittle}>
        Tipos de cartas
      </Text>
      <View
        style={DrawerStyles.itemWrapper}>
        <Icon name="square" solid type="font-awesome-5" color="gold" />
        <Text style={DrawerStyles.textItem}>Legendarias</Text>
      </View>
      <View
       style={{...DrawerStyles.itemWrapper, marginBottom:20}}>
        <Icon name="square" solid type="font-awesome-5" color="gray" />
        <Text style={DrawerStyles.textItem}>Normales</Text>
      </View>
    </DrawerContentScrollView>
  );
}
