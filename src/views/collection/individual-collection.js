import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const IndividualCollection = () => {
  return (
    <View style={styles.container}>
      <View>
        <AutoHeightImage
          width={300}
          style={{borderColor: '#B8874A', borderWidth: 5}}
          source={{
            uri: 'https://i.pinimg.com/originals/9f/cd/74/9fcd74d337576218aacb3849f84fa356.jpg',
          }}
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>La Noche estrellada</Text>
        <Text style={styles.subtittle}>Vincent Van Gogh, 1890</Text>
        <Text style={styles.infoText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
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
  infoText: {textAlign: 'justify'},
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
});
