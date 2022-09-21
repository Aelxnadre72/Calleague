import React, { useState } from "react";
import { StyleSheet, Text, Button, View, PixelRatio, TouchableOpacity } from "react-native";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Keyboard = () => {
    const [guess, setGuess] = useState("");
    const [letter, setLetter] = useState("");

    const KeysRowOne = () => {
        const alphabetOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"];
        const allKeysRowOne: JSX.Element[] = [];

        alphabetOne.forEach((letter) => {
            allKeysRowOne.push(
                <TouchableOpacity key={letter} onPress={() => {setLetter(letter); setGuess(guess + letter);}} style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>{letter}</Text>
                </TouchableOpacity>
                );
            }
        );

        return(<>{allKeysRowOne}</>);
    };

    const KeysRowTwo = () => {
        const alphabetTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ø", "Æ"];
        const allKeysRowTwo: JSX.Element[] = [];

        alphabetTwo.forEach((letter) => {
            allKeysRowTwo.push(
                <TouchableOpacity key={letter} onPress={() => {setLetter(letter); setGuess(guess + letter);}} style={keyboardStyle.key}>
                <Text style={keyboardStyle.keyText}>{letter}</Text>
                </TouchableOpacity>
                );
            }
        );

        return(<>{allKeysRowTwo}</>);
    };
    
    const KeysRowThree = () => {
        const alphabetThree = ["Z", "X", "C", "V", "B", "N", "M"];
        const allKeysRowThree: JSX.Element[] = [];

        alphabetThree.forEach((letter) => {
            allKeysRowThree.push(
                <TouchableOpacity key={letter} onPress={() => {setLetter(letter); setGuess(guess + letter);}} style={keyboardStyle.key}>
                <Text key={letter} style={keyboardStyle.keyText}>{letter}</Text>
                </TouchableOpacity>
                );
            }
        );
        
        return(<>{allKeysRowThree}</>);
    };

    return (
        <>
        {/*guesses*/}
        <View style={{flex: 5, backgroundColor: 'yellow'}}>
        <Text>{guess}</Text>
            <Text>{letter}</Text>
        </View>

        {/*keyboard*/}
        <View style={keyboardStyle.container}>
            <View style={keyboardStyle.row}>
                <KeysRowOne/>
            </View>

            <View style={keyboardStyle.row}>
                <KeysRowTwo/>
            </View>

            <View style={keyboardStyle.row}>
                <TouchableOpacity style={keyboardStyle.keySpecial}>
                    <Text style={keyboardStyle.keyTextEnter}>⏎</Text>
                </TouchableOpacity>

                <KeysRowThree/>
                
                <TouchableOpacity style={keyboardStyle.keySpecial} onPress={() => {setLetter(""); setGuess(guess.slice(0, -1));}}>
                    <Text style={keyboardStyle.keyTextDelete}>⌫</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
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
            fontSize: PixelRatio.get()*6.1,
            textAlign: "center",
        },
        keyTextEnter: {
            fontSize: PixelRatio.get()*7,
            textAlign: "center",
            fontWeight: "bold",
        },
        keyTextDelete: {
            fontSize: PixelRatio.get()*6.5,
            textAlign: "center",
        }
    });

export default Keyboard;