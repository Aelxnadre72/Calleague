import * as React from 'react';
import { View, Text, StatusBar } from 'react-native'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import {StartScreen} from'./screens/StartScreen';
import {PlayScreen} from'./screens/PlayScreen';
import {QuestScreen} from'./screens/QuestScreen';
import {LeaderboardScreen} from'./screens/LeaderboardScreen';
import {InfoScreen} from'./screens/InfoScreen';
import {FinishPlayScreen} from'./screens/FinishPlayScreen';

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
      <>
      <StatusBar backgroundColor='#d4f2fc'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Start">
          <Stack.Screen name = "Start" component={StartScreen} />
          <Stack.Screen name = "Play" component={PlayScreen} />
          <Stack.Screen name = "Quest" component={QuestScreen} />
          <Stack.Screen name = "Leaderboard" component={LeaderboardScreen} />
          <Stack.Screen name = "Info" component={InfoScreen} />
          <Stack.Screen name = "FinishPlay" component={FinishPlayScreen} />



          
         

        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
  }
}
