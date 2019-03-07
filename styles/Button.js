import { StyleSheet, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  halfWidthRounded: {
    margin: height*0.005,
    width: width*0.5,
    height: height*0.05,
    borderRadius: 10,
    backgroundColor: '#bad4ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center'
  }
});
