import React, { Component } from 'react';
import { Text, StyleSheet, View, BackHandler,Image, TextInput, ImageBackground,ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FlatList } from 'react-native-gesture-handler';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls'
import styles from './styles';
// import CONFIG from '../config/custom';
// import BottomSheet from 'reanimated-bottom-sheet';
import config from '../../config/custom'
const deviceHeight = Dimensions.get('window').height;

export default class MVNowPlay extends Component {
    videoPlayer;
    constructor(props) {
        super(props);
        this.state = {
            titleScreen: 'Videos',
            currentTime: 0,
            duration: 0,
            isFullScreen: false,
            isLoading: false,
            paused: false,
            playerState: PLAYER_STATES.PLAYING,
            screenType: 'content',
            pictureInPicture: true
        }
       
    }
    
    static navigationOptions = ({ navigation }) => ({
        headerStyle:{
            backgroundColor:'#283149',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            alignSelf: 'center',
            fontSize:16,
            fontWeight:'bold'
        },
        headerLayoutPreset: 'center'
    });

    onSeek = seek => {
        this.videoPlayer.seek(seek);
    }

    onPaused = playerState => {
        this.setState({
            paused: !this.state.paused,
            playerState,
        })
    }

    onReplay = () => {
        this.setState({playerState: PLAYER_STATES.PLAYING});
        this.videoPlayer.seek(0);
    }

    onProgress = data => {
        const { isLoading, playerState } = this.state;
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            this.setState({ currenTime : data.currenTime})
        } 
    }

    onLoad = data => this.setState({ 
        duration: data.duration, isLoading: false
    })

    onLoadStart = data => this.setState({
        isLoading: true
    });

    onEnd = () => this.setState({
        playerState: PLAYER_STATES.ENDED
    })

    onError = () => alert('Oh! ', error)

    exitFullScreen = () => {
        alert('Exit full screen')
    }

    enterFullScreen = () => {
        if (this.state.screenType == 'content') {
            this.setState({screenType: 'cover'});
            alert('Enter full screen');
        }
        else this.setState({screenType: 'content'});
    }

    onSeeking = currenTime => this.setState({currenTime})

    render() {
        return(
        // <ImageBackground source={config.BG} >
        <View style = {styles.containerItemVideo}>
            <Video 
                source={ {uri: 'http://dl110.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ2drZW9yMGhFY0RMNU5tWVV1NlBDb0lzQndLcTRCeGJXdEY5aGQ5amZaZmUrR0pqRGI1c2wvZldTNTVQUThueHpKeTR4d1pwNGpCZ2EybHZiMzBEZC9oUUxLYnRuWkhlVVRQMUZpckZWM3hpU1dpYVB5dEFXczlpK0wvd2pSU2oxWXZ6b2ZPTHZUL3BJRG1DTFBac2oxeHBFNm9ET2UzWkpJNWVTVnRRakp4N3N3c09ONldFSjljSmxjMWFYNHljK2U5UlpBdjQ0a3lXK2xqOEdnUHB4bEkvTE1LU2MrTXpKZHIrempWUjRRMnd3dXBUN3FwdnBndlVGZEtmQWxyVEdWcktheFlIckxYNXYwSE5UWEMrbnNwWlc4c2RnMDdFQ1k0N0RteGNnWnhrMzBhWm41UU5CT3RGY3pxTEdHOGNVN3h3dm9qMWhJMUxKZW5SbXU%3Dhttp://dl139.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ2dqY3cveVM4ckZMSkNyckk3d3R1bU4vWkVKcWdHOG95Mkx0TlY4ai9DZU42T0R3Q1BzSkVsUzNLTnlOc29xamJNekpncFhjeCthVDNLdnVpRXZCUW1uei9FUVl1YlJhZ1lZR2N2NVVacTN5T3MzUERBc1VpOTRWdTBxRmlYZVNZUDkya3RNT1dFdE0xdWdTeVpTZTYyM3BFUnFHaWM3WmNDbDd1Wm9Sanp6WTAycmNWN1ZudGdacTliemFYKzEvL0Zta0VOdjVRZDNVeStvT3lqT1pFekdxeWRjRFo4QVM4Yyt1YnNZdzBYeXlBUngwZU0wNkVDeEVWWlo1aEUxekhpcWVLbmF5L01PTUg2UnBTS1BzR04rNVNvc0xjdzVoYVAvckdKeXM0R2t4QzNRZHI2VXRnRnRCSnk5UFRSc3BwbGxRWHM%3D'} }   
                onEnd={this.onEnd}
                onLoad={this.onLoad}
                onLoadStart={this.onLoadStart}
                onProgress={this.onProgress}
                paused={this.state.paused}
                ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                resizeMode = {this.state.isFullScreen}
                volume = {10}
                style={styles.backgroundVideo}
            />
            <MediaControls
                duration = {this.state.duration}
                isLoading = {this.state.isLoading}
                mainColor = "#666"
                onFullScreen = {this.onFullScreen}
                onPaused = {this.onPaused}
                onReplay = {this.onReplay}
                onSeek = {this.onSeek}
                onSeeking = {this.onSeeking}
                playerState={this.state.playerState}
                progress = {this.state.currentTime}
            />
        </View>
  
        )
    }


}


