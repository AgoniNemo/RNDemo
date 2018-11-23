/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,TouchableOpacity,ToastAndroid} from 'react-native';
import TableView from 'src/Components/TableView/index'

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
        <TableView
          style={styles.container}
          pageLen={10}
          renderRow={this.createCell.bind(this)}
          refresh={this._refresh.bind(this)}
          loadMore={this._loadMore.bind(this)}
        />
    )
  }

  // 20180730 刷新
_refresh(callBack){
  
  let list = []
  for (let index = 0; index < 20; index++) {
    list.push({vc:`old Video${index}`,text:`第${index}行`,key:index})
  }
  callBack(list);
}
 
// 20180730 加载更多
_loadMore(page,callBack){
 
  let list = []
  for (let index = 20; index < 10; index++) {
      list.push({vc:`Video${index}`,text:`第${index}行`,key:index})
  }
  let old = this.state.data
  old.concat(list)
  callBack(old)
}
 
  
  componentDidMount() {
    let list = []
    for (let index = 0; index < 20; index++) {
      list.push({vc:`old Video${index}`,text:`第${index}行`,key:index})
    }
    setTimeout(() => {
      this.setState({
        data: list
      })
    }, 200);
  }

  createCell(row) {
    console.log('createCell');
    
    return (
        <View style={styles.cell}>
          <Text style={styles.text}>{`第${row}行`}</Text>
        </View>
    );
  }

  cellClick(item,index) {
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
    backgroundColor: 'red',
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