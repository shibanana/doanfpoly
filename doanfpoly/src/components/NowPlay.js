import React, { Component } from 'react';
import { Text, StyleSheet, View,Image, ImageBackground, TouchableOpacity, Animated, Easing } from 'react-native';
import CONFIG from '../config/custom';
import Sound from 'react-native-sound';
let sound
export default class NowPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleScreen: "Đang Phát",
            playState: true,
            link:CONFIG.LOINHO,
            
        }
        this.RotateValueHolder = new Animated.Value(0);
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Now Play',
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
    componentDidMount =  async () => {
        var link ='https://data.chiasenhac.com/downloads/2044/2/2043333-3adcc678/128/Loi%20Nho%20-%20Den_%20Phuong%20Anh%20Dao.mp3'
        sound = await new Sound(link, null, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
            }
            console.log('duration in seconds: ' + sound.getDuration());
            sound.play();
            this.StartImageRotateFunction();
          });
    }

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 15000,
            easing: Easing.linear,
        }).start(() => this.StartImageRotateFunction());
    }

    changeStatus = () => {
        const status = this.state.playState;
        if(status){
            this.setState({
                playState:!status
            });
            sound.pause();
        }else{
            this.setState({
                playState:true
            })
            sound.play();
        }
    }

    render() {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 10],
            outputRange: ['0deg', '360deg'],
          });
        return(
            <ImageBackground source={require('../images/background.png')} style = {styles.container}>
                <View style = {styles.imageNowPlay}>
                <Animated.Image
                    style={{
                        width: 250,
                        height: 250,
                        borderRadius: 500,
                        transform: [{ rotate: RotateData }],
                    }}
                    source={require('../images/nowplay_img.png')}
                />
                </View>
                <View style = {styles.infoSong}>
                    <Text style = {styles.styleSong}>The Way Home</Text>
                    <Text style = {styles.styleArtist}>DyTruong</Text>
                </View>
                <View style = {styles.progress}>
                    <Image style = {{alignItems: "center"}} source = {require('../images/progress.png')}></Image>
                </View>
                <View style = {styles.iconBar}>
                    <TouchableOpacity style={styles.mediaButton}>
                        <Image style = {styles.shuffleIcon} source={CONFIG.IC_SHUFFLE} tintColor='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaButton} >
                        <Image style = {styles.previousIcon} source={CONFIG.IC_PREVIOUS} tintColor='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.mediaButton} 
                        onPress = {() => this.changeStatus()}
                    >
                        { this.state.playState ? (
                            <Image style = {styles.playIcon} source={CONFIG.IC_PAUSE} tintColor='#fff' />
                        ) : (
                            <Image style = {styles.playIcon} source={CONFIG.IC_PLAY} tintColor='#fff' />
                        )}
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaButton} >
                        <Image style = {styles.previousIcon} source={CONFIG.IC_NEXT} tintColor='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaButton} >
                        <Image style = {styles.shuffleIcon} source={CONFIG.IC_LOOP} tintColor='#fff' />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 0
    },
    topBar: {
        marginHorizontal: 45,
        marginVertical: 40,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    labelTopbar: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold"
    },
    imageNowPlay: {
        alignItems: "center",
        marginTop: 20
    },
    infoSong: {
        alignItems: "center",
        marginTop: 20
    },
    styleSong: {
        marginTop:20,
        color: "#fff",
        fontWeight: "bold"
    },
    styleArtist: {
        marginTop:10,
        color: "#fff",
        opacity: .5
    },
    progress: {
        alignItems: "center",
        marginTop: 50
    },
    shuffleIcon:{
        width:20,
        height:20,
    },
    previousIcon:{
        width:25,
        height:25,
    },
    playIcon:{
        width:35,
        height:35,
    },
    iconBar: {
        marginTop: 35,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    mediaButton:{
        alignSelf:'center'
    }
})