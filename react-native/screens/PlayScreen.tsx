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


export const PlayScreen = ({ navigation }:any) => {
  
  const [pointer, setPointer] = useState([0,0])
  let index = 0;
  const name_list = new List<String>
  const url_list = new List<String>
  const employeeResult = useFetchEmployees();
  employeeResult.employees?.map((employee) => {
      const name_str = employee.name.replace("é", "e").replace("É", "E").replace("ä", "a").replace("-", " ");
      name_list.add(name_str);
      url_list.add(employee.image);
  })
  index = getRandomInt(name_list.size());
  const name = name_list.get(index);
  // change box size and make grid 
  
  const url = url_list.get(index);
  return (
    <View style={styles.container}>
      <View style={{flex: 1.4, backgroundColor: '#d4f2fc', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity
                style={styles.leaderboard_button}
                onPress= {() =>
                    navigation.navigate('Start')
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

      <View style={{flex: 3, backgroundColor: '#d4f2fc', alignItems: 'center', justifyContent: 'center'}}>
        <Image
              style={{resizeMode: "contain",
                      height:Dimensions.get('window').height*0.25,
                      width: Dimensions.get('window').width*0.75,
                      }}
              
              source={{uri: url}}
            />  
      </View>
      <Text>
        {name}
      </Text>
      <Keyboard></Keyboard>
    </View>

  );
};
export default PlayScreen;


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
});

