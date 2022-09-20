import * as React from 'react';
import { View, Text } from 'react-native'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import {StartScreen} from'./screens/StartScreen';
import {PlayScreen} from'./screens/PlayScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Start">
          <Stack.Screen name = "Start" component={StartScreen} />
          <Stack.Screen name = "Play" component={PlayScreen} />
          
         

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
