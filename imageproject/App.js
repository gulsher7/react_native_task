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
