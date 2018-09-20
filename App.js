/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,TouchableOpacity,ToastAndroid,Easing,Animated} from 'react-native';
import Home from 'views/Home/index'
import Animation from 'views/Animation/index'
import { StackNavigator } from 'react-navigation';

const SimpleApp = StackNavigator(
  {
     Home: { screen: Home },
     Animation: { screen: Animation }
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene
    
        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })
    
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })
    
        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SimpleApp />
    )
  }
}