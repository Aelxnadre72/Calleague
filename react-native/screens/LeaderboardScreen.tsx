import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { Keyboard } from '../components/Keyboard';


export const LeaderboardScreen = ({ navigation }:any) => {
    return (
      <View style={styles.flex_container}>
        <View style={{flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity
                style={styles.leaderboard_button}
                onPress= {() =>
                    navigation.navigate('Start')
                }
                >
                <Image
                    style={{resizeMode:'contain',
                            height:Dimensions.get('window').height*0.1,
                            width: Dimensions.get('window').width*0.15}}
                        
                    source={require('../img/leaderboard.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.settings_button}
                onPress= {() =>
                    navigation.navigate('Start')
                }
                >
                <Image
                    style={{resizeMode:'contain',
                            height:Dimensions.get('window').height*0.08,
                            width: Dimensions.get('window').width*0.13}}
                        
                    source={require('../img/home.png')}
                />
            </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: '#d4f2fc', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:35}}>
                Leaderboard
            </Text>
        </View>
        <View style={{flex: 5, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'flex-start'}}>
            <View style={{height:Dimensions.get('window').height*0.3,
                            width: Dimensions.get('window').width*0.25, 
                            backgroundColor: '#d4f2fc', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            borderRadius: 50,
                            }}>
                <Image
                    style={{resizeMode: "contain",
                            height:Dimensions.get('window').height*0.4,
                            width: Dimensions.get('window').width*0.3, 
                            borderRadius: 75}}
                        
                    source={require('../img/the_rock.png')}
                />
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
  });