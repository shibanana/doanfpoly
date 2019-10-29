import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'

export default class SplashScreen extends Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('App');
        }, 1000);
    }
    render() {
        return (
            <ImageBackground source={require('../images/background.png')} style={{width: '100%', height: '100%'}}>
            </ImageBackground>
        )
    }
}