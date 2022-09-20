import React from "react";
import { StyleSheet, Text, Button, View, PixelRatio } from "react-native";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Keyboard = () => {

  return (
    <View style={keyboardStyle.container}>
        <View style={keyboardStyle.row}>
            <Text style={keyboardStyle.keys}>Q</Text>
            <Text style={keyboardStyle.keys}>W</Text>
            <Text style={keyboardStyle.keys}>E</Text>
            <Text style={keyboardStyle.keys}>R</Text>
            <Text style={keyboardStyle.keys}>T</Text>
            <Text style={keyboardStyle.keys}>Y</Text>
            <Text style={keyboardStyle.keys}>U</Text>
            <Text style={keyboardStyle.keys}>I</Text>
            <Text style={keyboardStyle.keys}>O</Text>
            <Text style={keyboardStyle.keys}>P</Text>
            <Text style={keyboardStyle.keys}>Å</Text>
        </View>
        <View style={keyboardStyle.row}>
            <Text style={keyboardStyle.keys}>A</Text>
            <Text style={keyboardStyle.keys}>A</Text>
            <Text style={keyboardStyle.keys}>S</Text>
            <Text style={keyboardStyle.keys}>D</Text>
            <Text style={keyboardStyle.keys}>T</Text>
            <Text style={keyboardStyle.keys}>F</Text>
            <Text style={keyboardStyle.keys}>G</Text>
            <Text style={keyboardStyle.keys}>H</Text>
            <Text style={keyboardStyle.keys}>J</Text>
            <Text style={keyboardStyle.keys}>Ø</Text>
            <Text style={keyboardStyle.keys}>Æ</Text>
        </View>
        <View style={keyboardStyle.row}>
            <Text style={keyboardStyle.keys}>Q</Text>
            <Text style={keyboardStyle.keys}>W</Text>
            <Text style={keyboardStyle.keys}>E</Text>
            <Text style={keyboardStyle.keys}>R</Text>
            <Text style={keyboardStyle.keys}>T</Text>
            <Text style={keyboardStyle.keys}>Y</Text>
            <Text style={keyboardStyle.keys}>U</Text>
            <Text style={keyboardStyle.keys}>I</Text>
            <Text style={keyboardStyle.keys}>O</Text>
            <Text style={keyboardStyle.keys}>P</Text>
            <Text style={keyboardStyle.keys}>Å</Text>
        </View>
    </View>
  );
};

const keyboardStyle = StyleSheet.create({
    container: {
        flex: 3.5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'red',
        paddingHorizontal: '3%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        backgroundColor: 'red',
    },
    keys: {
        fontSize: 23, //PixelRatio.get()*6,
        flex: 1,
        textAlign: "center",
        backgroundColor: 'green',
        marginHorizontal: '2%',
    }
});



export default Keyboard;