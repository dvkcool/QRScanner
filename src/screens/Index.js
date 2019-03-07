import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import ButtonStyle from '../../styles/Button';
var {height, width} = Dimensions.get('window');

export default class BillScan extends Component<Props> {
  static navigationOptions = {
    title: 'GST Scanner',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ProductScan')}>
          <View  style={ButtonStyle.halfWidthRounded} >
              <Text style={ButtonStyle.buttonText}> Go to Product Scan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('BillScan')}>
          <View  style={ButtonStyle.halfWidthRounded} >
              <Text style={ButtonStyle.buttonText}> Go to Bill Scan</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
