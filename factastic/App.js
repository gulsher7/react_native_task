//calcualtor
import React, {Component} from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      input1: 0,
      input2: 0,
      sum: 0,
      sub: 0,
      mul: 0,
      div: 0
    }
  }

  calculateSum = () => {
    const { input1, input2 }  = this.state ;    
    this.setState({
      sum: Number(input1) + Number(input2),
      sub: Number(input1) - Number(input2),
      mul: Number(input1) * Number(input2),
      div: Number(input1) / Number(input2),
       
    });
}

  render() {
    const {sum,sub,mul,div} = this.state;
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Text style={{fontSize: 25, color: 'red', fontWeight: 'bold'}}>My Calculator</Text>
      </View>

    <View style={styles.inputData}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
      <Text style={{fontSize: 25, color: 'red', fontWeight: 'bold'}} >Input1</Text>
      <Text style={{fontSize: 25, color: 'red', fontWeight: 'bold'}} >Input2</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
      <TextInput maxLength = {10} keyboardType = {'numeric'} style={styles.inputField} onChangeText = {value1 => this.setState({input1: value1})} />
      <TextInput maxLength = {10} keyboardType = {'numeric'} style={styles.inputField}  onChangeText = {value2 => this.setState({input2: value2})} />
      </View>
    </View>

    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 50, color: 'red',}}>Your Result</Text>
      
      <View style={{flexDirection: 'row'}}>
       <Text style={{marginTop: 30 }}> Add </Text><Text style={styles.sumInput}> {sum}</Text>
       </View>

       <View style={{flexDirection: 'row'}}>
       <Text style={{marginTop: 30 }}> Sub  </Text><Text style={styles.sumInput}> {sub}</Text>
       </View>

       <View style={{flexDirection: 'row'}}>
       <Text style={{marginTop: 30 }}>Mul </Text><Text style={styles.sumInput}> {mul}</Text>
       </View>

       <View style={{flexDirection: 'row'}}>
       <Text style={{marginTop: 30 }}>Div  </Text><Text style={styles.sumInput}> {div}</Text>
       </View>
   

    <View>
      <TouchableOpacity onPress={this.calculateSum} style={styles.bottomButton}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Calculation</Text>
      </TouchableOpacity>
    </View>

    </View>


    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
  },

  header: {
    backgroundColor: 'lightblue',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputField: {
      borderWidth: 2,
      backgroundColor: 'pink',
      width: 150
  },
  inputData: {
    padding: 20,
  },

  sumInput: {
      borderWidth: 2,
      backgroundColor: 'pink',
      width: 150,
      paddingTop: 20,
      marginTop: 20,
  },

  bottomButton: {
    backgroundColor: 'green',
    width: 150,
    height: 50,
    borderWidth: 2,
    paddingTop: 5,
    marginTop: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  }

});
