
import React, {Component} from 'react';
import SplashScreen from './src/components/Splash';
import HomeScreen from './src/components/Home';
import { createStackNavigator, createAppContainer } from "react-navigation";
const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(AppNavigator);


