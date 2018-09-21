/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,TouchableOpacity,ToastAndroid} from 'react-native';

let {height, width} = Dimensions.get('window');


type Props = {};
export default class Home extends Component<Props> {

  static navigationOptions = {
   title: 'Home页面',
  };
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
    this.cellClick = this.cellClick.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={false}
          data={this.state.data}
          // ItemSeparatorComponent={this.separatorComponent}
          renderItem={({item,index}) => this.createCell(item,index)}
        />
      </View>
    )
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          {key:'Animations'},
          {key:'Animation'}
        ]
      })
    }, 200);

  }

  createCell(item,index) {
    return (
      <TouchableOpacity
      activeOpacity = {0.5}
      onPress={() => this.cellClick(item,index)}
        >
        <View style={styles.cell}>
          <Text style={styles.text}>{`第${index}行`}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  cellClick(item,index) {
    this.props.navigation.push(item.key);
    ToastAndroid.show(`点击了${index}`, ToastAndroid.SHORT);
  }

  /// 分割线
  separatorComponent(){
    return <View style={{height: 1, backgroundColor: 'black'}}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cell: {
    width: width,
    height: 44,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#eee',
    alignItems:'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});