import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';


export default class BillScan extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Product Scan"
          onPress={() => this.props.navigation.navigate('ProductScan')}
        />
        <Button
          title="Go to Bill Scan"
          onPress={() => this.props.navigation.navigate('BillScan')}
        />
      </View>
    );
  }
}
