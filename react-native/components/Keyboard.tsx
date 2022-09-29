import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button, View, PixelRatio, TouchableOpacity, Pressable, Alert } from "react-native";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Keyboard = (props: { arg: any }) => {
    const [guess, setGuess] = useState("");
    const [letter, setLetter] = useState("");
    const [alertVisibility, setAlertVisibility] = useState("none");
    const [result, setResult] = useState<any>();
    const [round, setRound] = useState<number>(0);
    
    
    console.log("firstRound: " + round);
    let rows = 4;
    let columns = 0;
    //let colorMapper: any[][] = [];

    {/*function kjor(){
        if(typeof props.arg.name != "undefined"){
            columns = props.arg.name.split(" ")[0].length;
        }
        console.log()
        for(let h = 0 ; h < rows; h++) {
            let abc = [];
            for(let y = 0; y < columns; y++) {
                abc[y] = '#FFFFFF';
            }
            colorMapper[h] = abc;
        }
    };*/}

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
    const Boxes = () => {
        let firstName = "";
        let letterCount = 0;
        const guessBoxes: JSX.Element[] = [];

        if(typeof props.arg.name != "undefined"){
            firstName = props.arg.name.split(" ")[0].toUpperCase();
            letterCount = firstName.length;
            allGuesses = guess;
            //kjor();
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
                        backgroundColor: '#ffffff', //colorMapper[l][m],
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
            <View style={guessBoxStyle.container}>
                <Text>{result}</Text>
                {guessBoxes}
                </View>
            </>);
    }

    let resultList: number[] = [];
    function checkName() {
        //colorMapper[0][0] = '#GGGGGG'; //test
        let num = props.arg.name.split(" ")[0].length;
        console.log("RoundVariable before checkName: " + round);
        if(allGuesses.replace(/-/g, "").length%num == 0 && allGuesses.replace(/-/g, "").length/num > round) {
            console.log("gotChecked");
            console.log("RoundIsNotUpped: " + round);
            setRound(round+1); //first round: round is set to 0
            console.log("RoundIsUpped: " + round);
            
            const green = [];
            let roundGuess = guess.slice(-num).toUpperCase();
            let roundName = props.arg.name.split(" ")[0].toUpperCase();

            for(let i = 0; i < num; i++) {
                if(roundName[i] == roundGuess[i]){
                    green.push(2);

                    roundGuess = roundGuess.slice(0, i) + "!" + roundGuess.slice(i+1, 100);
                    roundName = roundName.slice(0, i) + "?" + roundName.slice(i+1, 100);
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
        setResult(resultList);
        console.log(round);
        }


        let score = resultList.reduce((a, b) => a + b, 0) 
        let winScore = (props.arg.name.split(" ")[0].length)*2;
        console.log("Score: " + score);
        console.log("WinScore: " + winScore);
        console.log("Round: " + round);
        console.log("Rows-2: " + (rows-2));

        let stringLength = rows*(props.arg.name.split(" ")[0].length);
        let guessedLength = allGuesses.replace(/-/g, "").length;

        if (guessedLength === stringLength || score === winScore) { // siste trykk
            console.log("gotCheckedOut");
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