import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');

type Props = {};
export default class Animation extends Component<Props> {
    static navigationOptions = {
        title: '动画界面',
        header: null,
    };
   render() {
     return (
       <View style={styles.container}>
         <View style={styles.frontImage}>
             <Image source={require('assets/image/back.png')}
             style={styles.img}
             />
         </View>
       </View>
       )
   }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    img: {
        resizeMode: 'cover',
    },
    frontImage: {
        position: 'absolute',
        zIndex: 1,
    },
    behindImage: {
        zIndex: 2,
    },
});