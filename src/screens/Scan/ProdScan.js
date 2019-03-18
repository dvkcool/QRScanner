import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator, Alert, AsyncStorage} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from '../../../styles/Scanner';
class ScanActivity extends Component<Props>{
  constructor(props) {
    super(props);
    this.state = {
      ip: "",
      bill_id: ""
    };
    this.onDSuccess = this.onDSuccess.bind(this);
    AsyncStorage.getItem('ip').then((value) => this.setState({ 'ip': value }));
    AsyncStorage.getItem('bill_id').then((value) => this.setState({ 'bill_id': value }));
  }
  onDSuccess(e) {
    this.setState({
      send: 0
    })
    var val = e.data;
    var n = val.length;
    var t = val.substring(0,6);
    var q = val.substring(6);
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
      var url = "http://"+this.state.ip + ":8083/productscan/"+this.state.bill_id+"/"+q;
      console.log(url);
      console.log("HI");
      fetch(url, {
    method: 'GET',
    }).then((responseJson) => {
      this.scanner.reactivate();
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
  render(){
    if(this.props.send==1){
      return(
          <QRCodeScanner
            onRead={this.onDSuccess}
            ref={(node) => { this.scanner = node }}
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

  constructor(props) {
    super(props);
    this.state = { send: 1 };
    this.setSend = this.setSend.bind(this);
  }
  render() {
    return (
        <ScanActivity send={this.state.send} navigation={this.props.navigation}/>


    );
  }

}
