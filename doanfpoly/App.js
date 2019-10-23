
import React, {Component} from 'react';
import SplashScreen from './src/components/Splash';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './src/components/Main';
import Home from './src/components/Home';
import MainLogin from './src/components/MainLogin';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Artist from './src/components/Artist';

import Discover from './src/components/Discover';
import NowPlay from './src/components/NowPlay';
import TabNavigator from './src/components/TabNavigator';
import mp3 from './src/components/mp3';
const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: Home,
    Mainlogin:MainLogin,
    Login:Login,
    Signup:Signup,
    Artist:Artist,
    NowPlay:NowPlay,
    Discover:Discover,
    Music:mp3,
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(AppNavigator);


