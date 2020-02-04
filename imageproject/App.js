import React, {Component} from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      title: 'Title',
      newTitle: ''
    }
  }

  
  changeTitle = () => {  
    const {newTitle} = this.state;
    this.setState({
      title : newTitle
    });
}

  componentDidMount(){
    this.setState({
      name: 'gulsher',
      email: 'gulsherkhan0005@gmail.com',
    })
  }
  render() {
    const {name, email, title, newTitle} = this.state;
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
  <Text>{title}</Text>
        <Image source = {require('./img/logo1.png')} style={{width: 30, height: 30, position: 'absolute', top: 40, right: 10}}/>
        <Image source = {require('./img/logo1.png')} style={{width: 30, height: 30,  position: 'absolute', top: 40, left: 10}}/>
        </View>  
      
      <View>
        <Image style={{height: 200,}} source = {require('./img/mainimage.jpeg')} />

        <Image source = {require('./img/logo4.jpg')} style={{width: 30, height: 30,  position: 'absolute', top: 10, left: 10}}/>
        <Image source = {require('./img/logo4.jpg')} style={{width: 30, height: 30,  position: 'absolute', bottom: 10, left: 10}}/>
        <Image source = {require('./img/logo4.jpg')} style={{width: 30, height: 30,  position: 'absolute', top: 10, right: 10}}/>
        <Image source = {require('./img/logo4.jpg')} style={{width: 30, height: 30,  position: 'absolute', bottom: 10, right: 10}}/>

      </View>

      <View style={{paddingTop: 20, paddingHorizontal: 16}}>

        <Text>Name - {name} </Text>
        <Text>Email - {email} </Text>
      </View>

      <View style={{alignItems: 'center', paddingTop: 150 }}>
        <TextInput onChangeText = {fetch => this.setState({newTitle: fetch})}  placeholder="change title" style={{borderBottomWidth: 2, width: 100}} maxLength = {10} />
      </View>

      <TouchableOpacity onPress = {this.changeTitle} style={styles.bottomButton}>
      <Image  source = {require('./img/logo4.jpg')} style={{width: 30, height: 30, borderRadius: 50, alignSelf: 'center', marginTop: 25}}/>
      </TouchableOpacity>

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
    backgroundColor: 'pink',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomButton: {
        backgroundColor: 'red',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignSelf: 'center',
        margin: 80,
  }

});
