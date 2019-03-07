import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from '../../../styles/Scanner';
export default class ProdScan extends Component<Props> {
  static navigationOptions = {
    title: 'GST Scanner - Product Scanning',
  };
  onSuccess(e) {
    console.log(e);

  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Scan QR code to add product to bill
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
        reactivate = {true}
        reactivateTimeout = {5}
      />
    );
  }

}
