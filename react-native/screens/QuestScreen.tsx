import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { Keyboard } from '../components/Keyboard';

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





export const QuestScreen = ({ navigation }:any) => {

  const [pointer, setPointer] = useState([0,0])
  let index = 0;
  const name_list = new List<String>
  const url_list = new List<String>
  const employeeResult = useFetchEmployees();
  employeeResult.employees?.map((employee) => {
      name_list.add(employee.name);
      url_list.add(employee.image);
  })
  index = getRandomInt(name_list.size());
  const name = name_list.get(index);
  // change box size and make grid 

  const url = url_list.get(index);
  return (
    <View style={styles.container}>
      <View style={{flex: 1.7, backgroundColor: '#3BC8EF', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity
                style={styles.leaderboard_button}
                onPress= {() =>
                    navigation.navigate('Start')
                }
                >
                <Image
                    style={{resizeMode:'contain',
                            height:Dimensions.get('window').height*0.09,
                            width: Dimensions.get('window').width*0.12,
                            }}
                        
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
                            height:Dimensions.get('window').height*0.1,
                            width: Dimensions.get('window').width*0.15,
                            marginTop:Dimensions.get('window').height*0.02
                          }}

                        
                    source={require('../img/leaderboard.png')}
                />
            </TouchableOpacity>
      
      </View>
      <View style={{flex: 3, backgroundColor: '#3BC8EF',  alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{resizeMode: "contain",
                    height:Dimensions.get('window').height*0.25,
                    width: Dimensions.get('window').width*1}}
                    
                    source={{uri: url}}
          />
          <Text>
            {name}
          </Text>
      </View>
      
      
      <Keyboard></Keyboard>
    </View>
         
    

  );
};
export default QuestScreen;

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