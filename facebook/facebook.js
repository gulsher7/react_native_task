import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, Image, TextInput, Dimensions } from 'react-native';

export default class App extends Component  {
  render(){ 
  return (
    <View style={{backgroundColor:  '#EBE9E9', flex: 1}}>
      <View style={styles.container1}></View>
    
      
      <Text style={styles.container2}>Facebook </Text>
      


{/*  ***********************************Input-Section-Start ************************************** */}

      <View style={{paddingHorizontal:8, backgroundColor: 'white'}}>
      <Text style={{paddingVertical: 8}}>Mobile number or email</Text>
      <TextInput style={{width: 438, height: 30, backgroundColor: '#FFFFFF', borderColor: '#dddfe2', borderWidth: 1}} />
      <Text style={{paddingTop: 20, paddingBottom:8}}>Password</Text>
      <TextInput secureTextEntry={true} style={{width: 438, height: 30, backgroundColor: '#FFFFFF', borderColor: '#dddfe2', borderWidth: 1}} />
      

{/*  ***********************************Login Button ************************************** */}

      <View style={{paddingVertical:15, paddingHorizontal: 2 }}>      
        <Button  title="Log In" />
      </View>


      <Text style={{paddingTop: 10, paddingBottom: 10, color: '#385898'}}>Forget your password?</Text>
      </View>
      <View style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
            }}
      />
      <Text style={{color: 'gray', alignSelf: 'center', paddingTop: 25 }} > ────────────────  or  ────────────────</Text>
      <View >
        
          <Text style={{alignSelf: 'center', paddingTop: 30}}>Create New Account</Text>
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
   width: Dimensions.get('screen').width,
  },

  container2: {
    height: 35,
    //width: Dimensions.get('window').width,
    backgroundColor: '#2F5EA1',
    color: 'white',
    
   }

})

