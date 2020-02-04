import React, {Component} from 'react';

import { StyleSheet, Text, Button, View, Image, TextInput, TouchableOpacity, Linking,} from 'react-native';

export default class App extends Component  {
  render(){ 
  return (
    <View style={{backgroundColor:  '#EBE9E9', flex: 1}}>
      <View style={styles.container1}></View>
    
      <View style={styles.container2} >
      <Text style={{  color: 'white', alignSelf: 'center', paddingTop: 10, fontWeight: 'bold'}} >Facebook </Text>
      </View>
      


{/*  ***********************************Input-Section-Start ************************************** */}

      <View style={{paddingHorizontal:8, backgroundColor: 'white'}}>
      <Text style={{paddingVertical: 8}}>Mobile number or email</Text>
      <TextInput style={{width: 438, height: 30, backgroundColor: '#FFFFFF', borderColor: '#dddfe2', borderWidth: 1}} />
      <Text style={{paddingTop: 20, paddingBottom:8}}>Password</Text>
      <TextInput secureTextEntry={true} style={{width: 438, height: 30, backgroundColor: '#FFFFFF', borderColor: '#dddfe2', borderWidth: 1}} />
      

{/*  ***********************************Login Button ************************************** */}

    <View>  
      <TouchableOpacity style={{backgroundColor: '#3d86e8', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 20}} >
            <Text style={{color: 'white', fontWeight: 'bold'}}>Log In</Text>
        </TouchableOpacity>  
        </View>
      <Text style={{paddingTop: 10, paddingBottom: 10, color: '#385898'}} onPress={ ()=> Linking.openURL('https://www.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar')} >Forget your password?</Text>
      </View>
      <View style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
            }}
      />
      <Text style={{color: 'gray', alignSelf: 'center', paddingTop: 25 }} > <Text style={{borderBottomWidth: 2}}></Text>  or  <Text style={{borderBottomWidth: 2}}></Text></Text>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>  
      <TouchableOpacity style={{backgroundColor: '#669b46', width: 150, height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 20}} >
            <Text style={{color: 'white', fontWeight: 'bold'}}>Create New Account</Text>
        </TouchableOpacity>  
        </View>
      
{/*  ***********************************Languages-Detail************************************** */}

      <View style={{padding: 10}}>
        <Text>English(US)</Text>
        <Text style={{paddingTop: 20, color: '#385898'}}>हिन्दी</Text>
        <Text style={{paddingTop: 20, color: '#385898'}}>বাংলা</Text>
        <Text style={{paddingTop: 20, color: '#385898'}}>తెలుగు</Text>
        <Text style={{paddingTop: 20, color: '#385898'}}>मराठी</Text>
        <Text style={{paddingTop: 20, color: '#385898'}}>தமிழ்</Text>
        <Text style={{paddingTop: 20, color: '#385898'}}>More Languages...</Text>
      </View>
    </View>
  );
}
}

//** **********************StyleSheet************************* **/
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
