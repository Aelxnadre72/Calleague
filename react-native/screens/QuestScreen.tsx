import { Text, View, Image, Dimensions, StyleSheet } from "react-native";
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


export const QuestScreen = () => {
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
  const url = url_list.get(index);
  return (
    <View style={questScreenStyle.container}>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View style={{flex: 3, backgroundColor: 'green'}}>
          <Image
            style={{resizeMode: "contain",
                    height:Dimensions.get('window').height*0.25,
                    width: Dimensions.get('window').width*0.75}}
                    
            source={{uri: url}}
          />
          <Text>
            {name}
          </Text>
      </View>
      
      <View style={{flex: 5, backgroundColor: 'yellow'}}></View>
      <Keyboard></Keyboard>
    </View>
         
    

  );
};
export default QuestScreen;

const questScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});