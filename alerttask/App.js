import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

export default class HomeActivity extends Component {

  constructor(props) {
      super(props)
      this.state = {
        TextInputValue: ''
      }
  }

  getValue = () =>{
      const { TextInputValue }  = this.state ;
      Alert.alert(TextInputValue);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
         Name
        </Text>

        <TextInput
          style={{width: 200, borderBottomColor: "gray",borderBottomWidth: 2}}
          onChangeText={TextInputValue => this.setState({TextInputValue})}
         
        />

        <View style={styles.button}>

          <TouchableOpacity onPress={this.getValue} >
            <Text style={{color: 'white'}}>SHOW</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: "bold"
  },
  button: {
    borderRadius: 40,
    width: 200,
    backgroundColor: 'green',
    marginTop: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
