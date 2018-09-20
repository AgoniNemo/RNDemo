import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
type Props = {};
export default class Animation extends Component<Props> {
    static navigationOptions = {
        title: '动画界面'
    };
   render() {
     return (
       <View style={styles.container}>
         
       </View>
       )
   }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});