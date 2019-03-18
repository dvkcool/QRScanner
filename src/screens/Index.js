import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, TextInput, Alert, AsyncStorage } from 'react-native';
import ButtonStyle from '../../styles/Button';
var {height, width} = Dimensions.get('window');

export default class BillScan extends Component<Props> {
  static navigationOptions = {
    title: 'GST Scanner',
  };
  constructor(props) {
    super(props);
    this.state = {
      ip: "",
      bill_id: ""
    };
    this.setScan = this.setScan.bind(this);
    AsyncStorage.getItem('ip').then((value) => this.setState({ 'ip': value }));
    AsyncStorage.getItem('bill_id').then((value) => this.setState({ 'bill_id': value }));
  }
  setScan(){
    if(this.state.ip ===""|| this.state.bill_id===""){
      Alert.alert("Error", "Please enter valid url and bill id");
    }
    else{
      var url = "http://"+this.state.ip + ":8083/test";
      console.log(url);
      fetch(url, {
        method: 'GET',
        }).then((response) => response.json())
          .then((responseJson) =>  {
            if(responseJson.sucess === 1){
              console.log("Valid Ip");
              AsyncStorage.setItem('ip', this.state.ip);
              AsyncStorage.setItem('bill_id', this.state.bill_id);
              this.props.navigation.navigate('ProductScan');
            }
          })
          .catch((error) => {
            console.error(error);
          });
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: width*0.5, margin: 20}}
          onChangeText={(ip) => this.setState({ip})}
          value={this.state.ip}
          placeholder="IP of system"
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: width*0.5, margin: 20}}
          onChangeText={(bill_id) => this.setState({bill_id})}
          value={this.state.bill_id}
          placeholder="Bill Id"
        />
        <TouchableOpacity
          onPress={() => this.setScan()}>
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
