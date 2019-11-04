
import React, {Component} from 'react';
import SplashScreen from './src/components/Splash';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/components/Navigator/Main';
import MainLogin from './src/components/MainLogin';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Artist from './src/components/Artist';
import Discover from './src/components/Discover';
import MVNowPlay from './src/components/MVItem/MVNowPlay';
import mp3 from './src/components/mp3';
import Playlist from './src/components/Playlist/Playlist';
import PlaylistItem from './src/components/PlaylistItem/PlaylistItem';
import ChoosePlaylist from './src/components/ChoosePlaylist/ChoosePlaylist';
const AppStack = createStackNavigator({
  Main:{
    screen:Main,
    navigationOptions:{
      header:null
    }
  },
  Artist:Artist,
  Discover:Discover,
  MVNowPlay: MVNowPlay,
  Playlist: Playlist,
  PlaylistItem: PlaylistItem,
  ChoosePlaylist: ChoosePlaylist
},{
  headerLayoutPreset: 'center'
}
)
const AuthStack = createStackNavigator(
  {
    MainLogin:MainLogin,
    Login:Login,
    Signup:Signup,

  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading:SplashScreen,
      App:AppStack,
      Auth:AuthStack,
    },
    {
      initialRouteName:'Auth',
    }
  ))


