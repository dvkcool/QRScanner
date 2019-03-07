import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from '../../../styles/Scanner';
class ScanActivity extends Component<Props>{
  render(){
    if(this.props.send==1){
      return(
          <QRCodeScanner
            onRead={this.props.onSuccess}
            reactivate = {true}
            reactivateTimeout = {10}
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
          />
      );
    }
    else{
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  }
}
export default class ProdScan extends Component<Props> {
  static navigationOptions = {
    title: 'GST Scanner - Product Scanning',
  };

  setSend(){
    this.setState({
      send: 1
    })
  }
  onSuccess(e) {
    this.setState({
      send: 0
    })
    var val = e.data;
    var n = val.length;
    var t = val.substring(0,6);
    if(n<5){
      Alert.alert("Invalid qr code");
      this.setState({
        send:1
      });
    }
    else if(!(t==="gstdvk")){
      Alert.alert("Invalid qr code");
      this.setState({
        send:1
      });
    }
    else{
      Alert.alert("Valid qr code");
      fetch('https://www.google.co.in', {
    method: 'GET',
    }).then((responseJson) => {
        this.setState({
          send:1
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
    console.log(e);
  }
  constructor(props) {
    super(props);
    this.state = { send: 1 };
    this.setSend = this.setSend.bind(this);
  }
  render() {
    return (
        <ScanActivity send={this.state.send} onSuccess={this.onSuccess.bind(this)} navigation={this.props.navigation}/>


    );
  }

}
