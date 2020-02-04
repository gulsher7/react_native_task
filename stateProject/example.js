//calcualtor
import React, {Component} from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';



export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      input1: 0,
      input2: 0,
      sum: 0
    }
  }

  calculateSum = () => {
    const { input1, input2 }  = this.state ;    
    this.setState({
      sum: Number(input1) + Number(input2)
    });
}

  render() {
    const {sum} = this.state;
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Text>My Calculator</Text>
      </View>

    <View style={styles.inputData}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
      <Text>Input1</Text>
      <Text>Input2</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
      <TextInput style={styles.inputField} onChangeText = {value1 => this.setState({input1: value1})} />
      <TextInput style={styles.inputField}  onChangeText = {value2 => this.setState({input2: value2})} />
      </View>
    </View>

    <View>
      <Text style={{fontWeight: 'bold', fontSize: 50,  alignSelf: 'center'}}>+</Text>
      <TextInput  style={styles.sumInput} > <Text>{sum}</Text> </TextInput>
    </View>

    <View>
      <TouchableOpacity onPress={this.calculateSum} style={styles.bottomButton}>
        <Text>Result</Text>
      </TouchableOpacity>
    </View>

  

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },

  header: {
    backgroundColor: 'red',
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
      alignSelf: 'center',
      paddingTop: 20,
      marginTop: 20
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


// ******************************************* image project 



import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments: '',
      likes: ''
    }
  }
  
  componentDidMount(){
    this.setState({
      comments: '10',
      likes: '20'
    })
  }

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Title</Text>
      </View>

          <View>
           <Image source={require('./img/bunny.png')} style={{width: 600, height: 300}} />
           <Image source={require('./img/logo1.jpg')} style={{width: 60, height: 60, borderRadius: 50, position: 'absolute', top:10, right: 10}} />
           </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 10}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
            <Text style={{paddingRight: 20}}>Comments: {this.state.comments} </Text>
            <Text>Likes: {this.state.likes}</Text>
            </View>

              
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
            <Image source={require('./img/logo1.jpg')} style={{width: 30, height: 30, borderRadius: 50,}} />
            <Image source={require('./img/logo1.jpg')} style={{width: 30, height: 30, borderRadius: 50,}} />
            <Image source={require('./img/logo1.jpg')} style={{width: 30, height: 30, borderRadius: 50,}} />
            </View>

          </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EBD3',
  },

  header: {
    backgroundColor: '#90F1E9',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },


});
