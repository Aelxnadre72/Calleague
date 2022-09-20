import React from "react";
import { Button, View } from "react-native";

import { Text } from "../components/Themed";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const PlayScreen = ({ navigation }) => {
  const employeeResult = useFetchEmployees();

  const gotoDetails = (employee: Employee) => () =>
    navigation.navigate("Modal", { employee });

  return (
    <View>
        <Text>
            Welcome to play screen
        </Text>
       
         
    </View>

  );
};
export default PlayScreen;