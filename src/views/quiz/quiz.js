import React from 'react';
import {View, Animated} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {QuizStyles} from './styles/quiz-styles';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

export const Quiz = ({navigation}) => {
  return (
    <View style={QuizStyles.backgroudImage}>
      <View style={QuizStyles.topUtils}>
        <View style={{zIndex: 1, top: 10}}>
          <TouchableOpacity>
            <Icon
              name="chevron-left"
              color="black"
              size={50}
              type="font-awesome-5"
              onPress={() => {
                navigation.navigate('Map');
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={QuizStyles.question}>¿Cuál fue primero?</Text>
        </View>
        <View>
          <CountdownCircleTimer
            isPlaying
            duration={30}
            size={80}
            onComplete={() => [navigation.navigate('Map')]}
            colors={[
              ['#004777', 0.4],
              ['#F7B801', 0.4],
              ['#A30000', 0.2],
            ]}>
            {({remainingTime, animatedColor}) => (
              <Animated.Text style={{color: animatedColor}}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '1%',
            justifyContent: 'space-evenly',
          }}>
          <View style={{width: '40%', marginTop: '5%'}}>
            <AutoHeightImage
              width={225}
              style={{borderColor: '#B8874A', borderWidth: 5}}
              source={{
                uri: 'https://i.pinimg.com/originals/9f/cd/74/9fcd74d337576218aacb3849f84fa356.jpg',
              }}
            />
          </View>
          <View style={{width: '40%', marginTop: '5%'}}>
            <AutoHeightImage
              style={{borderColor: '#B8874A', borderWidth: 5}}
              width={233}
              source={{
                uri: 'https://3.bp.blogspot.com/-n1aZFQN3_OU/WEcVxxHlgOI/AAAAAAAACF4/z_1qV-Qvq90IZpmf9iYiT_Z2bywX70DTACLcB/w1200-h630-p-k-no-nu/387970_3000.jpg',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
