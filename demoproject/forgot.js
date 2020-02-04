import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, Image, TextInput, TouchableOpacity, Linking} from 'react-native';

export default class App extends Component  {
  render(){ 
  return (
    <View style={{backgroundColor:  '#EBE9E9', flex: 1}}>
      <View style={styles.container1}></View>
    
      <View style={styles.container2} >
      <Text style={{  color: 'white', alignSelf: 'center', paddingTop: 10, fontWeight: 'bold'}} >Facebook </Text>
      </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
    container1: {
     height: 30,
     backgroundColor: '#3b5998',
    },
  
    container2: {
      height: 35,
      backgroundColor: '#2F5EA1',
     }
  
  })
  