import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class ProdScan extends Component<Props> {
  static navigationOptions = {
    title: 'GST Scanner - Product Scanning',
  };
  render() {
    return (
      <View>
        <Text> Product scan page</Text>
      </View>
    );
  }
}
