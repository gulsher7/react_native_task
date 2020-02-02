import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      username: '',
      email: ''
    }
  }

  componentDidMount(){
    this.setState({
      username: 'Gulsher',
      email: 'gulsherkhan0005@gmail.com'
    })
  }
  
  render(){
 return (
   <View style={{backgroundColor: '#C9E4CB', flex: 1}}>
     <View style={styles.container1}> 
       <Image style={{height: 100, width: 100}}  source ={require('./img/pika5.png')} />
       <Text style={{fontSize: 20, fontWeight: 'bold'}} >Pokemon-APP</Text>
       <Image style={{height: 100, width: 100}}  source ={require('./img/005.png')} />
     </View>

     <View style={styles.container2}>
     <Image style={{height: 100, width: 100}}  source ={require('./img/ash.gif')} /> 
     </View>


{/*  ***********************************Input-Section-Start ************************************** */}

     <View style={styles.container3}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}} >Name</Text>
      <Text>{this.state.username} </Text>
     </View>

     <View style={styles.container3}>
     <Text style={{fontSize: 20, fontWeight: 'bold'}} >Email</Text>
     <Text>{this.state.email} </Text>
     </View>


{/*  ***********************************Button Section ************************************** */}
      
<View style={styles.container4}>      
        <Button  title="Cancel" color="red" />
        <Button  title="Log In" />
        <Button  title="Submit" color="green"/>    
  </View>



{/*  ***********************************Footer Section ************************************** */}
  
  <View style={styles.container5}>
  <Image style={{height: 100, width: 100}}  source ={require('./img/dancingpikachu.gif')} />
       </View>

       <View style={styles.container6}>
       <Image style={{height: 100, width: 100}}  source ={require('./img/psyduck.gif')} />

     </View>
     

     
   </View>
 )
  }
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 150,
    alignItems: 'center',
    backgroundColor: '#FCF7D8'
  },

  container2:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  },

  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 60
  },

  container4:{
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingHorizontal: 30,
  },

  container5: {
    position: 'absolute',
    bottom: 40,
    left: 40
  },

  container6: {
    position: 'absolute',
    bottom: 40,
    right: 40
  },


})