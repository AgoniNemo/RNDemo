/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,TouchableOpacity,ToastAndroid,Easing,Animated} from 'react-native';
import Navigator from 'src/Components/Navigator/index'

class App extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}
export default App;