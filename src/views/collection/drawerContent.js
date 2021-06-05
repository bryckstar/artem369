import React from 'react';
import {Button, View} from 'react-native';
import {Text, SearchBar, Icon} from 'react-native-elements';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export function DrawerContent(props) {
  return (
    <View>
        <Text h2>Tu colección</Text>
        <Text h4>Buscar Obra</Text>
        <SearchBar placeholder="Ejemplo Noche..." />
        <Text h4>Filtrar por</Text>
        <Text h3>Corrientes Artisticas</Text>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="caret-forward-outline" type="ionicon" color="green" />
          <Text>Posimpresionismo</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="caret-forward-outline" type="ionicon" color="red" />
          <Text>Modernismo</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="caret-forward-outline" type="ionicon" color="cyan" />
          <Text>Renacimiento</Text>
        </View>
        <Text h3>Tipos de cartas</Text>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="caret-forward-outline" type="ionicon" color="gold" />
          <Text>Legendarias</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="caret-forward-outline" type="ionicon" color="gray" />
          <Text>Normales</Text>
        </View>
    </View>
  );
}
