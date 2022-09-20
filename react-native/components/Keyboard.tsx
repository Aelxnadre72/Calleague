import React from "react";
import { StyleSheet, Text, Button, View, PixelRatio, Pressable } from "react-native";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Keyboard = () => {

  return (
    <View style={keyboardStyle.container}>
        <View style={keyboardStyle.row}>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            
        </View>
        <View style={keyboardStyle.row}>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            
        </View>
        <View style={keyboardStyle.row}>
            <Pressable style={keyboardStyle.keySpecial}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
            <Pressable style={keyboardStyle.keySpecial}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </Pressable>
        </View>
    </View>
  );
};

const keyboardStyle = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingHorizontal: '1%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%',
        backgroundColor: 'red',
        width: '100%',
    },
    key: {
        flex: 1,
        backgroundColor: 'green',
        marginHorizontal: '0.5%',
        paddingVertical: "3.5%",
        
    },
    keySpecial: {
        flex: 2,
        backgroundColor: 'blue',
        marginHorizontal: '1%',
        paddingVertical: "3.5%",
    },
    keyText: {
        fontSize: 23, //PixelRatio.get()*6
        textAlign: "center",
    }
});

export default Keyboard;