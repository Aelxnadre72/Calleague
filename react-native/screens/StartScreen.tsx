import React from "react";
import { Button, View } from "react-native";

import { Text } from "../components/Themed";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const StartScreen = ({ navigation }: any) => {
  const employeeResult = useFetchEmployees();

  

  return (
    <View>
        <Text>
            Hello world
        </Text>
        <Button
            title="PLAY"
            onPress={() =>
                navigation.navigate('Play')
            }
          />
    </View>

  );
};
export default StartScreen;
