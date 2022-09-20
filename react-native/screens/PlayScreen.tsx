import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Keyboard from "../components/Keyboard";

export const PlayScreen = ({ navigation }:any) => {
  const employeeResult = useFetchEmployees();

  const gotoDetails = (employee: Employee) => () =>
    navigation.navigate("Modal", { employee });

  return (
    <View style={playScreenStyle.container}>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View style={{flex: 3, backgroundColor: 'green'}}></View>
      <View style={{flex: 5, backgroundColor: 'yellow'}}></View>
      <Keyboard></Keyboard>
    </View>

  );
};

const playScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlayScreen;