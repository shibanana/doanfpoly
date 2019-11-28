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
                source={ {uri: 'https://data.chiasenhac.com/downloads/2044/1/2043927/128/Kataomoi%20no%20Cinderella%20-%20SUPER___GiRLS.mp4'} }   
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


