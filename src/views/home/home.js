import React from 'react';
import { Button, Text, View } from 'react-native';

export const Home = ({ navigation }) => {
    return (<View>
        <Button title='Map' onPress={() => { navigation.navigate('Map') }} />
        <View style={{marginTop:10}}>
        <Button title='Collections' onPress={() => { navigation.navigate('Collection') }} />
        </View>
        <View style={{marginTop:10}}>
        <Button title='Profile' onPress={() => { navigation.navigate('Profile') }} />
        </View>
        <View style={{marginTop:10}}>
        <Button title='Configuration' onPress={() => { navigation.navigate('Configuration') }} />
        </View>
        <View style={{marginTop:10}}>
        <Button title='Quiz' onPress={() => { navigation.navigate('Quiz') }} />
        </View>
        </View>)
}