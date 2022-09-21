import React, { useState } from "react";
import { StyleSheet, Text, Button, View, PixelRatio, TouchableOpacity, Pressable, Alert } from "react-native";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Keyboard = (props: { arg: any }) => {
    const [guess, setGuess] = useState("");
    const [letter, setLetter] = useState("");
    const [alertVisibility, setAlertVisibility] = useState("none");
    const [round, setRound] = useState(0);
    const [colorList, setcolorList] = useState([]);
    


    const KeysRowOne = () => {
        const alphabetOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"];
        const allKeysRowOne: JSX.Element[] = [];
        let nameLength = 1;
        if(typeof props.arg.name != "undefined"){
            nameLength = props.arg.name.split(" ")[0].length;
        }
        let lengthLimit = (round+1)*nameLength;

        alphabetOne.forEach((letter) => {
            allKeysRowOne.push(
                <TouchableOpacity key={letter} onPress={() => {setLetter(letter); (guess.length < lengthLimit) ? setGuess(guess + letter) : console.log('test');}} style={keyboardStyle.key}>
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
        let nameLength = 1;
        if(typeof props.arg.name != "undefined"){
            nameLength = props.arg.name.split(" ")[0].length;
        }
        let lengthLimit = (round+1)*nameLength;

        alphabetTwo.forEach((letter) => {
            allKeysRowTwo.push(
                <TouchableOpacity key={letter} onPress={() => {setLetter(letter); (guess.length < lengthLimit) ? setGuess(guess + letter) : 0;}} style={keyboardStyle.key}>
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
        let nameLength = 1;
        if(typeof props.arg.name != "undefined"){
            nameLength = props.arg.name.split(" ")[0].length;
        }
        let lengthLimit = (round+1)*nameLength;

        alphabetThree.forEach((letter) => {
            allKeysRowThree.push(
                <TouchableOpacity key={letter} onPress={() => {setLetter(letter); (guess.length < lengthLimit) ? setGuess(guess + letter) : console.log('test');}} style={keyboardStyle.key}>
                <Text key={letter} style={keyboardStyle.keyText}>{letter}</Text>
                </TouchableOpacity>
                );
            }
        );
        
        return(<>{allKeysRowThree}</>);
    };

    let allGuesses = "";
    let rows = 5;
    const Boxes = () => {
        let firstName = "";
        let letterCount = 0;
        const guessBoxes: JSX.Element[] = [];

        if(typeof props.arg.name != "undefined"){
            firstName = props.arg.name.split(" ")[0].toUpperCase();
            letterCount = firstName.length;
            allGuesses = guess;
            for(let j = 0; j < (letterCount*rows - guess.length); j++){
                allGuesses += "-";
            }

        
            for(let l = 0; l < rows; l++){
                const rowContent: JSX.Element[] = [];
                for(let m = 0; m < letterCount; m++) {
                    let pos = l*letterCount + m;
                    rowContent.push(<Text key={l + m} style={{
                        flex: 1,
                        fontSize: 25,
                        backgroundColor: '#ffffff',
                        marginHorizontal: '1.1%',
                        paddingVertical: '3.5%',
                        borderRadius: 6,
                        width: "10%",
                        textAlign: 'center',
                        height: "90%",
                        borderWidth: 3,
                        borderColor: '#80a6ad',
                }}>{allGuesses[pos]}</Text>);
                }
                guessBoxes.push(<View key={l + 'row'} style={guessBoxStyle.rows}>{rowContent}</View>);
            }
        }
        
        return(<>
            {/*<Text>{firstName}</Text>
            <Text>{letterCount}</Text>*/}
            <View style={guessBoxStyle.container}>{guessBoxes}</View>
            </>);
    }

    function checkName() {
        let resultList = [];
        let num = props.arg.name.split(" ")[0].length;
        if(allGuesses.replace(/-/g, "").length%num == 0 && allGuesses.replace(/-/g, "").length/num > round) {
            setRound(round + 1); //first round: round is set to 0
            
            const green = [];
            let roundGuess = guess.slice(-num).toUpperCase();
            let roundName = props.arg.name.split(" ")[0].toUpperCase();

            for(let i = 0; i < num; i++) {
                if(roundName[i] == roundGuess[i]){
                    green.push(2);

                    let a = roundGuess;
                    let b = roundGuess;
                    a = roundGuess.slice(0, i);
                    b = roundGuess.slice(i+1, 100);

                    let c = roundName;
                    let d = roundName;
                    c = roundName.slice(0, i);
                    d = roundName.slice(i+1, 100);
                    roundGuess = a + "!" + b;
                    roundName = c + "?" + d;
                }
                else {
                    green.push(0);
                }
            }

            const yellow = [];
            for(let j = 0; j < num; j++) {
                let cc = true;
                for(let k = 0; k < num; k++){
                    console.log(j + " " + roundGuess[j] +" "+ k + " " + roundName[k]);
                    if(roundGuess[j] == roundName[k] && j != k){
                        yellow.push(1);
                        cc = false;
                        break;
                    }
                }
                if(cc) {
                    yellow.push(0);
                }
            }
        
        for(let s = 0; s < num; s++){
            if(green[s] > yellow[s]) {
                resultList.push(green[s]);
            }
            else {
                resultList.push(yellow[s]);
            }        
        }
        console.log(resultList);
        console.log(round);
        }

        let sum = 0;
        for(let w = 0; w < resultList.length; w++) {
            if(resultList[w] != 2) {
                sum ++;
            }
        }
        if (round >= rows-1 || sum == 0) { // siste trykk
            const args = {
                navigation: props.arg.navigation, 
                name: props.arg.name.split(" ")[0].toUpperCase(), 
                url: props.arg.url, 
                success: props.arg.name.split(" ")[0].toUpperCase() == guess.slice(-num)
            }
            
            console.log(args.success);
            props.arg.navigation.navigate('FinishPlay', {args: args})
            
        }
    }

    function checkBackSpace() {
        let num = props.arg.name.split(" ")[0].length;
        let position = round*num;
        if(allGuesses[position] != "-"){
            setLetter(""); setGuess(guess.slice(0, -1));
        }
    }

    return (
        <>
        {/*guesses*/}
        <View style={{flex: 5, backgroundColor: '#d4f2fc'}}>
            {/*<Text>{pprops.arg.name}</Text>*/}
            <Boxes/>
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
                <TouchableOpacity style={keyboardStyle.keySpecial} onPress={checkName}> 
                    <Text style={keyboardStyle.keyTextEnter}>⏎</Text>
                </TouchableOpacity>

                <KeysRowThree/>
                
                <TouchableOpacity style={keyboardStyle.keySpecial} onPress={checkBackSpace}>
                    <Text style={keyboardStyle.keyTextDelete}>⌫</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
    };

    const guessBoxStyle = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            paddingTop: '7%',
        },
        rows: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            paddingHorizontal: '1%', //should be dynamic, alternative: remove this and --
        },
        text: {
            //marginHorizontal: '2.8%', -- and add this
            flex: 1,
            fontSize: 25,
            backgroundColor: '#ffffff',
            marginHorizontal: '1.1%',
            paddingVertical: '3.5%',
            borderRadius: 6,
            width: "10%",
            textAlign: 'center',
            height: "90%",
            borderWidth: 3,
            borderColor: '#80a6ad',
        }
    });

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
            paddingVertical: '3%',
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