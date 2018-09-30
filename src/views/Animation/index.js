import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Animated,ToastAndroid} from 'react-native';
let {height, width} = Dimensions.get('window');

type Props = {};
export default class Animation extends Component<Props> {
    static navigationOptions = {
        title: '动画界面',
        header: null,
    };

    state = {
        fadeAnim: new Animated.Value(1),
        X: new Animated.Value(0),
    }

   render() {
    let { fadeAnim , X} = this.state;
     return (
       <View style={styles.container}>
         <View style={styles.frontImage}>
            <Animated.View style={{
                                    ...styles.animate,
                                    marginTop: X,
                                    opacity: fadeAnim}}>
                <Image source={require('assets/image/logo.png')}></Image>
            </Animated.View>
         </View>
         <View style={{marginTop: 50}}>
             <TouchableOpacity onPress={this.viewClick.bind(this)}>
                <Text>Animated动画</Text>
             </TouchableOpacity>
         </View>
         <View style={{marginTop: 10}}>
             <TouchableOpacity onPress={this.translateAnimated.bind(this)}>
                <Text>translate动画</Text>
             </TouchableOpacity>
         </View>
       </View>
       )
   }

   componentDidMount() {
       // 网络 
   }

   viewClick() {
    // Animated.timing(                  // 随时间变化而执行动画
    //     this.state.fadeAnim,            // 动画中的变量值
    //     {
    //       toValue: 0,                   // 透明度最终变为0，即完全透明
    //       duration: 2000,              // 让动画持续一段时间
    //     }
    // ).start();
    Animated.sequence([
        Animated.parallel([
            Animated.spring(
                this.state.fadeAnim,
                {
                    toValue: 0,
                    duration: 20000,
                }
            ),
            Animated.spring(
                this.state.X,
                {
                    toValue: 200,
                    duration: 20000,
                }
            )
        ])
    ]).start();

    // ToastAndroid.show('图片点击！', ToastAndroid.SHORT);
   }


   translateAnimated() {
        this.props.navigation.goBack();
        // this.styles.animate.transform = [
        //     {translateX: 20},
        //     {translateY: 200},
        // ]
   }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    animate: {
        width:200,
        height:200,
        backgroundColor: 'red'
    }
});