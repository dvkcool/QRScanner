import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class BillScan extends Component<Props> {
  static navigationOptions = {
    title: 'GST Scanner - Bill Scanning',
  };
  render() {
    return (
      <View>
        <Text> Bill scan page</Text>
      </View>
    );
  }
}
