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
import InstaClone from './src/InstaClone.js';
import FlatListDemo from './src/FlatListDemo.js';


export default class App extends Component{

  render() {
    return (
      <View style={styles.container}>
      {/* <InstaClone />*/}
       <FlatListDemo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)'
  },
});
