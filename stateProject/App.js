import React, {Component} from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default class App extends Component{

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     name: '',
  //     email: '',
  //     title: ''
  //   }
  // }

//   changeText = () => {
//     const { input1, input2, title }  = this.state ;    
//     this.setState({
//       sum: Number(input1) + Number(input2)
//     });
// }

  render() {
    //const {sum} = this.state;
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Text>Title</Text>
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

});
