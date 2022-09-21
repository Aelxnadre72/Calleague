import React, { Component, useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions, Button } from "react-native";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Keyboard from "../components/Keyboard";

class List<T> {
  private items: Array<T>;

  constructor() {
      this.items = [];
  }

  size(): number {
      return this.items.length;
  }

  add(value: T): void {
      this.items.push(value);
  }

  get(index: number): T {
      return this.items[index];
  }
}

function getRandomInt(max: any) {
  return Math.floor(Math.random() * max);
}


export const FinishPlayScreen = (props:any ) => {
  console.log( props.route.params.args.name);
    
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, backgroundColor: '#d4f2fc', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity
                style={styles.leaderboard_button}
                onPress= {() =>
                    props.route.params.args.navigation.navigate('Start')
                }
                >
                <Image
                    style={{resizeMode:'contain',
                            height:Dimensions.get('window').height*0.08,
                            width: Dimensions.get('window').width*0.13,
                            marginTop:Dimensions.get('window').height*0.01}}
                    source={require('../img/home.png')}
                        
                /> 
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.settings_button}
                onPress= {() =>
                    props.route.params.args.navigation.navigate('Leaderboard')
                }
                >
                <Image
                    style={{resizeMode:'contain',
                            height:Dimensions.get('window').height*0.12,
                            width: Dimensions.get('window').width*0.16,
                            marginTop:Dimensions.get('window').height*0.02}}
                            

                        
                    source={require('../img/leaderboard.png')}
                />
            </TouchableOpacity>
        </View>
      <View style={{flex: 1.5, backgroundColor: '#d4f2fc', alignItems: 'center', justifyContent: 'flex-start'}}>
        <Image
              style={{resizeMode: "contain",
                      height:Dimensions.get('window').height*0.25,
                      width: Dimensions.get('window').width*0.75,
                      }}
              
              source={{uri:props.route.params.args.url}}
            />  
        <Text style={{fontSize:20, alignItems: 'center', justifyContent: 'center'}}> {props.route.params.args.name} </Text>
        
        </View>

      <View style={{flex: 3, backgroundColor: '#d4f2fc', alignItems: 'center', justifyContent: 'center'}}>
        {props.route.params.args.success ? <Text style={{fontSize:40, marginTop:Dimensions.get('window').height*0.05}}> You Won! </Text>: <Text style={{fontSize:40, marginTop:Dimensions.get('window').height*0}}> You Lost! </Text> }
      <View style = {styles.container3}>
        <View style = {styles.buttonContainer}>
          <TouchableOpacity
            style={styles.play_button}
            onPress= {() =>
              props.route.params.args.navigation.navigate('Start')
          }
          >
            <Text style={styles.play_button_text}>RETURN TO MENU</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      </View>
      
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leaderboard_button: {
    paddingHorizontal: Dimensions.get('window').width*0.05,
    paddingVertical: Dimensions.get('window').height*0.01,


    
  },

  settings_button: {
    paddingHorizontal: Dimensions.get('window').width*0.06,
    paddingVertical: Dimensions.get('window').height*0.008,

    
  },
  container3: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.35,
    overflow: 'hidden',
    backgroundColor:"#d4f2fc",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  container4: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.2,
    overflow: 'hidden',
    backgroundColor:"#d4f2fc",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  quest_button: {
    backgroundColor: "#3BC8EF",
    paddingHorizontal: 50,
    paddingVertical: Dimensions.get('window').height*0.025,

    borderRadius: 30,
    marginTop: Dimensions.get('window').height*0.02
  },

  play_button: {
    paddingHorizontal: Dimensions.get('window').width*0.08,
    paddingVertical: Dimensions.get('window').height*0.01,
  },
  buttonContainer: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.1,
    marginTop: Dimensions.get('window').height*0.05,
    backgroundColor:"#F68221",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
    
  },
  quest_button_text: {
    fontSize: 30, // may change font size to dynamic
    fontWeight: '400',
    color: "black",
  },

  play_button_text: {
    fontSize: 30,
    fontWeight: '400',
    color: "black",
  },
});

