import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { Keyboard } from '../components/Keyboard';


export const LeaderboardScreen = ({ navigation }:any) => {
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
                    navigation.navigate('FinishPlay')
                }
                >
                <Image
                    style={{resizeMode:'contain',
                            height:Dimensions.get('window').height*0.07,
                            width: Dimensions.get('window').width*0.12}}
                        
                    source={require('../img/info.png')}
                />
            </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: '#d4f2fc', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:35}}>
                Leaderboard
            </Text>
        </View>
        <View style={{flex: 5, backgroundColor: '#d4f2fc', alignItems: 'center', justifyContent: 'flex-start'}}>
            <View style={{flex:1}}>
                <View style = {styles.buttonContainer1}>
              <TouchableOpacity
                
                
              >
                <Text style={{fontSize:20}}>Lars Martin Elgen, 2567p</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={{flex:1}}>
                <View style = {styles.buttonContainer2}>
              <TouchableOpacity
                
                
              >
                <Text style={{fontSize:20}}>Joakim Andresen, 2143p</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={{flex:1}}>
                <View style = {styles.buttonContainer3}>
              <TouchableOpacity
                
                
              >
                <Text style={{fontSize:20}}>Trond Espen Seim, 1766p</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={{flex:1}}>
                <View style = {styles.buttonContainer4}>
              <TouchableOpacity
                
                
              >
                <Text style={{fontSize:20}}>Thomas Ødegård Våe, 1669</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={{flex:1}}>
                <View style = {styles.buttonContainer5}>
              <TouchableOpacity
                
                
              >
                <Text style={{fontSize:20}}>Pia von Gruber, 1501p</Text>
              </TouchableOpacity>
            </View>
            </View>
            
          <View style={{flex:1, backgroundColor: '#d4f2fc'}}>

          </View>
        </View>
           
      </View>
  
    );
  };
  export default LeaderboardScreen;
  
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
      paddingVertical: Dimensions.get('window').height*0.008,
  
      
    },
    container: {
      flex:1, 
      flexDirection: "row",
      

    },
    text: {
      borderWidth: 2,
      
    },
    buttonContainer1: {
      width: Dimensions.get('window').width * 0.85,
      height: Dimensions.get('window').height * 0.10,
      marginTop: Dimensions.get('window').height*0.04,
      backgroundColor:"#F68221",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30
      
    },
    buttonContainer2: {
      width: Dimensions.get('window').width * 0.85,
      height: Dimensions.get('window').height * 0.10,
      marginTop: Dimensions.get('window').height*0.04,
      backgroundColor:"#EF934C",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30
      
    },
    buttonContainer3: {
      width: Dimensions.get('window').width * 0.85,
      height: Dimensions.get('window').height * 0.10,
      marginTop: Dimensions.get('window').height*0.04,
      backgroundColor:"#EDA771",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30
      
    },
    buttonContainer4: {
      width: Dimensions.get('window').width * 0.85,
      height: Dimensions.get('window').height * 0.10,
      marginTop: Dimensions.get('window').height*0.04,
      backgroundColor:"#EAB891",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30
      
    },
    buttonContainer5: {
      width: Dimensions.get('window').width * 0.85,
      height: Dimensions.get('window').height * 0.10,
      marginTop: Dimensions.get('window').height*0.04,
      backgroundColor:"#E8C7AE",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30
      
    },
  });