import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerfontstyle}>Text</Text>
      </View>
      
      <View style={styles.imgbutton}>
        <Image  style={{ width: 100, height: 100, borderRadius: 50 }}  source={require('./img/myimage3.jpeg')}/>
        
        <TouchableOpacity  style={styles.topbutton}>
      <Text style={{color: 'white', }}>Changes</Text>
      </TouchableOpacity>

      </View>

      <View style={{paddingHorizontal: 16}} >
      <View style={{paddingTop: 30}}>
      <Button title="SETTINGS" color="red"/>
      </View>

      <View  style={{marginTop: 20}} >
      <Button title="CONTACT US" />
      </View>

      <View  style={{marginTop: 20}}>
      <Button title="LOGOUT" color="green"/>
      </View>

      <TouchableOpacity  style={styles.bottombutton}>
      <Text style={{color: 'white'}}>EXIT</Text>
      </TouchableOpacity>

      </View>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE8D8',
  
  },

  header: {
    backgroundColor: '#6E684B',
    height: 100, 
  },

  headerfontstyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white', 
    alignSelf: 'center', 
    paddingTop: 40,
  },


  imgbutton:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 50,
      paddingTop: 100,
      marginBottom: 120,
  },


 topbutton: {
  marginTop: 20,
  height: 40,
  width: 100,
  backgroundColor: 'blue',
  justifyContent: 'center',
  alignItems: 'center',
  
 },


 bottombutton: {
  marginTop: 20,
  height: 40,
  borderRadius: 40,
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center'
  
 }   
  
});
