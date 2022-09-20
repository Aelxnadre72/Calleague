import React, { Component } from "react";
import { Button, View, StyleSheet, Dimensions, TouchableOpacity, Image, PixelRatio, StatusBar } from "react-native";
import { Constants } from 'expo';
import { Text } from "../components/Themed";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export const StartScreen = ({ navigation }: any) => {
  const employeeResult = useFetchEmployees();

  

  return (
    <View>
      <View style = {styles.container_header}>
          <TouchableOpacity
              style={styles.leaderboard_button}
              onPress= {() =>
                navigation.navigate('Play')
            }
            >
              <Image
                style={{resizeMode:'cover',
                        height:Dimensions.get('window').height*0.08,
                        width: Dimensions.get('window').width*0.13}}
                       
                source={require('../img/leaderboard.png')}
              />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.settings_button}
              onPress= {() =>
                navigation.navigate('Play')
            }
            >
              <Image
                style={{resizeMode:'cover',
                        height:Dimensions.get('window').height*0.07,
                        width: Dimensions.get('window').width*0.13}}
                       
                source={require('../img/settings.png')}
              />
          </TouchableOpacity>
      </View>
      <View style = {styles.container_header2}>
          
          <TouchableOpacity
              style={styles.it_button}
              onPress= {() =>
                navigation.navigate('Play')
            }
            >
              <Image
                style={{resizeMode:'cover',
                        height:Dimensions.get('window').height*0.12,
                        width: Dimensions.get('window').width*0.5}}
                       
                source={require('../img/itverket.png')}
              />
          </TouchableOpacity>
      </View>
      <View style = {styles.container3}>
        <View style = {styles.buttonContainer}>
          <TouchableOpacity
            style={styles.play_button}
            onPress= {() =>
              navigation.navigate('Play')
          }
          >
            <Text style={styles.play_button_text}>P L A Y</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.container4}>
        <TouchableOpacity
            style={styles.quest_button}
            onPress= {() =>
              navigation.navigate('Play')
          }
          >
            <Text style={styles.quest_button_text}>TODAY'S QUEST</Text>
          </TouchableOpacity>
      </View>
    
  </View>

  );
};
export default StartScreen;






const styles = StyleSheet.create({
  container3: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.3,
    overflow: 'hidden',
    backgroundColor:"#d4f2fc",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  container4: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.4,
    overflow: 'hidden',
    backgroundColor:"#d4f2fc",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  container_header: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.18,
    marginTop: Dimensions.get('window').height*0,
    overflow: 'hidden',
    backgroundColor:"#d4f2fc",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection:"row"
  },
  container_header2: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.2,
    marginTop: Dimensions.get('window').height*0,
    overflow: 'hidden',
    backgroundColor:"#d4f2fc",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection:"row",
    paddingHorizontal: Dimensions.get('window').width*0.1,

  },

  buttonContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.13,
    marginTop: Dimensions.get('window').height*0.09,
    backgroundColor:"#F68221",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
    
  },
  quest_button_text: {
    fontSize: 35, // may change font size to dynamic
    fontWeight: '400',
    color: "black",
  },

  play_button_text: {
    fontSize: 50,
    fontWeight: '400',
    color: "black",
  },
  /* Here style the background of your button */
  quest_button: {
    backgroundColor: "#3BC8EF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20
  },

  play_button: {
    paddingHorizontal: Dimensions.get('window').width*0.08,
    paddingVertical: Dimensions.get('window').height*0.01,
  },
    
  leaderboard_button: {
      paddingHorizontal: Dimensions.get('window').width*0.1,
      paddingVertical: Dimensions.get('window').height*0.02,

      
  },

  settings_button: {
    paddingHorizontal: Dimensions.get('window').width*0.1,
    paddingVertical: Dimensions.get('window').height*0.02,

    
  },
  

  it_button: {
    addingHorizontal: Dimensions.get('window').width*0.06,
    paddingVertical: Dimensions.get('window').height*0.025,
    
  },
  

});
