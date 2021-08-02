import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
export const IndividualCollection = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/*  */}

      <View style={styles.imageContainer}>
        <View style={{marginLeft: 7}}>
          <Icon
            name="chevron-left"
            onPress={() => {
              navigation.goBack();
            }}
            type="font-awesome-5"
          />
        </View>

        <View style={styles.imageWrapper}>
          <AutoHeightImage
            width={250}
            style={{
              borderColor: '#B8874A',
              borderWidth: 5,
            }}
            source={{
              uri: 'https://i.imgur.com/ExZB3yk.png',
            }}
          />
        </View>

        <View>
          <Icon style={styles.icons} name="heart" type="font-awesome-5" />
          <Icon style={styles.icons} name="share-alt" type="font-awesome-5" />
          <Icon style={styles.icons} name="bars" type="font-awesome-5" />
        </View>
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>La Anunciación</Text>
        <Text style={styles.subtittle}>Fra Angélico, 1425-1426</Text>
        <Text style={styles.infoText}>
          La Anunciación es un retablo realizado por el pintor toscano del
          Renacimiento Fra Angélico, sobrenombre de Guido di Pietro da Mugello
          (1400- 1455). Está realizado en oro y temple sobre tabla, y (según las
          últimas investigaciones) fue pintado hacia 1425-1426 (antes se databa
          hacia 1430- 1432). Consta de una escena principal, con el tema de la
          Anunciación a la Virgen María, y de una predela o banco con cinco
          pequeñas escenas más. El conjunto mide 194 cm de ancho y 194 cm de
          alto.1 Se exhibe actualmente en el Museo del Prado de Madrid.
        </Text>
        <View
          style={{
            alignSelf: 'flex-start',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '3%',
          }}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Canjear</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 30,
  },
  information: {
    padding: 10,
    paddingRight: 310,
  },
  infoText: {textAlign: 'justify', marginRight: 50},
  title: {fontSize: 20, marginTop: 5},
  subtittle: {fontSize: 15, marginTop: 5, marginBottom: 7},
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1%',
    backgroundColor: '#FE6363',
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {color: 'white', fontWeight: '900'},
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    alignSelf: 'center',
    marginRight: 15,
  },
  icons: {
    marginTop: '40%',
  },
});
