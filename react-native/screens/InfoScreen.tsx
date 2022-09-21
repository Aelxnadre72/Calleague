import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { Keyboard } from '../components/Keyboard';


export const InfoScreen = ({ navigation }:any) => {
    return (
      <View style={styles.flex_container}>
        <View style={{flex: 1, backgroundColor: '#d4f2fc', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity
                style={styles.leaderboard_button}
                onPress= {() =>
                    navigation.navigate('Start')
                }
                >
                <Image
                    style={{resizeMode:'contain',
                            height:Dimensions.get('window').height*0.1,
                            width: Dimensions.get('window').width*0.13}}
                        
                    source={require('../img/home.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.settings_button}
                onPress= {() =>
                    navigation.navigate('Leaderboard')
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
        <View style={{flex: 5, backgroundColor: '#d4f2fc', justifyContent: 'center', alignItems: 'center'}}>
            <View style = {styles.buttonContainer}>
              <TouchableOpacity >
                <Text style={{fontSize:20}}>Rules</Text>
              </TouchableOpacity>
        </View>
        <View style={{flex: 5, backgroundColor: '#d4f2fc', alignItems: 'center'}}>
          <View style={{width:Dimensions.get('window').width*0.9, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize:20}}> The goal of this app is to learn the names of eachother! Through feedback from the tiles, guess the name in five guesses to win. The game have two different modes: </Text>
            
            <View style = {styles.buttonContainer2}>
              <TouchableOpacity >
                <Text style={{fontSize:20}}>Normal mode:</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize:20}}> In normal mode you can play as many times as you want without worrying about your score.  </Text>
            <View style = {styles.buttonContainer2}>
              <TouchableOpacity >
                <Text style={{fontSize:20}}>Quest of the day:</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize:20}}> Make sure you are careful with your guesses, you only get one daily chance at the quest of the day!  </Text>
          </View>
            
            
        </View>
        
      </View>
           
    </View>
  
    );
  };
  export default InfoScreen;
  
  const styles = StyleSheet.create({
    flex_container: {
      flex: 1,
    },
    leaderboard_button: {
        paddingHorizontal: Dimensions.get('window').width*0.05,
        paddingVertical: Dimensions.get('window').height*0.01,
  
        
    },
  
    settings_button: {
      paddingHorizontal: Dimensions.get('window').width*0.06,
      paddingVertical: Dimensions.get('window').height*0.1,
  
      
    },
    buttonContainer: {
      width: Dimensions.get('window').width * 0.85,
      height: Dimensions.get('window').height * 0.08,
      marginTop: Dimensions.get('window').height*0.005,
      marginBottom: Dimensions.get('window').height*0.05,

      backgroundColor:"#F68221",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30
      
    },
    buttonContainer2: {
      width: Dimensions.get('window').width * 0.50,
      height: Dimensions.get('window').height * 0.06,
      marginTop: Dimensions.get('window').height*0.05,
      marginBottom: Dimensions.get('window').height*0.002,

      backgroundColor:"#E5AB82",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30
      
    },
  });