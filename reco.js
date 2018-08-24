/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert
} from 'react-native';
import {InstaClone} from './src/InstaClone.js';


const instructions = Platform.select({
  ios: 'IOS төхөөрөмжөөр холбогдсон байна' +
  'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Андройд төхөөрөмжөөр холбогдсон байна\n\n' +
  'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu, added something',
});


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = { text: 'gajh' };
  }

  loginbut(){

    Alert.alert("you clicked "+this.state)
  
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Нүүр хуудсанд тавтай морил!
        </Text>
        <Text style={styles.instructions}>
          Нэмэлт тайлбар
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

                <TextInput style={{width:250}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  placeholder='Хэрэглэгчийн нэр' />

                <TextInput style={{width:250}} placeholder='Password' />
                
                <Button 
                        onPress={this.loginbut}
                        color="#841584"
                        title="Нэвтрэх"
                    />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42d1f4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
