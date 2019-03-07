/**
* Basic staring page of the app
*/
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

// Importing the pages
import Index from './screens/Index';
import BillScan from './screens/Scan/BillScan';
import ProdScan from './screens/Scan/ProdScan';
const AppNavigator = createStackNavigator(
  {
    Home: Index,
    BillScan: BillScan,
    ProductScan: ProdScan
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
