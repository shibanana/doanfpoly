import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CONFIG from '../../config/custom'
import Home from '../Home/Home';
import Rank from '../Rank/Rank';
import Mv from '../Mv/Mv';
import Personal from '../Pesonal/Personal';

const TabNavigator = createBottomTabNavigator(
  {
    Home:{
        screen:Home,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Image style={styles.iconTab} source={CONFIG.IC_VINYL} tintColor={tintColor} />,
            title:'Khám phá'
        },
    },
    Store:{
        screen:Rank,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Image style={styles.iconTab} source={CONFIG.IC_STATISTICS} tintColor={tintColor} />,
            title:'Bảng xếp hạng'
        },
    },
    Album:{
        screen:Mv,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Image style={styles.iconTab} source={CONFIG.IC_YOUTUBE} tintColor={tintColor} />,
            title:'MV'
        },
    },
    Account:{
        screen: Personal,
        navigationOptions:{
            tabBarIcon:({tintColor})=><Image style={styles.iconTab} source={CONFIG.IC_DISC} tintColor={tintColor} />,
            title:'Cá nhân' 
        },
    },
  },
  {
      initialRouteName:'Home',
      tabBarOptions:{
          activeTintColor:'#fff',
          inactiveTintColor:'grey',
          labelStyle: {
              fontSize: 13,
          },
          style:{
              paddingTop:5,
              paddingBottom:3,
              backgroundColor:'#283149'
          },
          keyboardHidesTabBar: true,
      },
  }
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  iconTab:{
    width:20,
    height:20
  }
})