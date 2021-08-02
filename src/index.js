import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './views/login/login';
import {Home} from './views/home/home';
import {Map} from './views/map/map';
import {Collection} from './views/collection/collection';
import {Profile} from './views/profile/profile';
import {Quiz} from './views/quiz/quiz';
import {Quiz2} from './views/quiz/quiz2';
import {Quiz3} from './views/quiz/quiz3';
import {Quiz4} from './views/quiz/quiz4';
import {IndividualCollection} from './views/collection/individual-collection';
import {Room} from './views/rooms/room';
const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Map" component={Map} options={{headerShown: false}} />
      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IndCol"
        component={IndividualCollection}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Configuration" component={Profile} />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz2"
        component={Quiz2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz3"
        component={Quiz3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz4"
        component={Quiz4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Room"
        options={{headerShown: false}}
        component={Room}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
