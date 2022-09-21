import React from "react";
import { StyleSheet, Text, Button, View, PixelRatio, TouchableOpacity } from "react-native";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Keyboard = () => {

  return (
    <View style={keyboardStyle.container}>
        <View style={keyboardStyle.row}>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
        </View>

        <View style={keyboardStyle.row}>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
        </View>

        <View style={keyboardStyle.row}>
            <TouchableOpacity style={keyboardStyle.keySpecial}>
                <Text style={keyboardStyle.keyTextEnter}>↩</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={keyboardStyle.keySpecial}>
                <Text style={keyboardStyle.keyTextDelete}>⌫</Text>
            </TouchableOpacity>
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
        backgroundColor: '#dbdbdb',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        width: '100%',
    },
    key: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginHorizontal: '0.5%',
        paddingVertical: '3.5%',
        borderRadius: 6,
    },
    keySpecial: {
        flex: 2,
        backgroundColor: '#f7811f',
        marginHorizontal: '1%',
        paddingVertical: '3.5%',
        borderRadius: 12,
    },
    keyText: {
        fontSize: 23, //PixelRatio.get()*6.1,
        textAlign: "center",
    },
    keyTextEnter: {
        fontSize: 30, //PixelRatio.get()*6.1,
        textAlign: "center",
    },
    keyTextDelete: {
        fontSize: 25, //PixelRatio.get()*6.1,
        textAlign: "center",
    }
});

export default Keyboard;