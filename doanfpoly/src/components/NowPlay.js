import React, { Component, useRef } from 'react';
import { Text, StyleSheet, View,Image, ImageBackground, TouchableOpacity, Animated, Easing, Dimensions, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import CONFIG from '../config/custom';
import Sound from 'react-native-sound';
import BottomSheet from 'reanimated-bottom-sheet';
import { withNavigation } from 'react-navigation';

let bottomSheetRef = React.createRef(<BottomSheet/>);
const deviceHeight = Dimensions.get('window').height;

class NowPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleScreen: "Đang Phát",
            link:CONFIG.LOINHO,
            playState:'paused', //playing, paused
            playSeconds:0,
            duration:0,
            modalVisible:false,
            transparent: false,
            minimize: false,
            deviceHeight: deviceHeight,
            data: this.props.data,
        }
        this.RotateValueHolder = new Animated.Value(0);
        this.sliderEditing = false;
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

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0)
        Animated.timing(
          this.RotateValueHolder,
          {
            toValue: 1,
            duration: 15000,
            // easing: Easing.linear
          }
        ).start(() => this.StartImageRotateFunction())
    }

    componentDidMount(){

            this.play();

            this.timeout = setInterval(() => {
                if(this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing){
                    this.sound.getCurrentTime((seconds, isPlaying) => {
                        this.setState({playSeconds:seconds});
                    })
                }
            }, 100);
            this.StartImageRotateFunction();


    }
    componentWillUnmount(){
        if(this.sound){
            this.sound.release();
            this.sound = null;
        }
        if(this.timeout){
            clearInterval(this.timeout);
        }
    }

    onSliderEditStart = () => {
        this.sliderEditing = true;
    }
    onSliderEditEnd = () => {
        this.sliderEditing = false;
    }
    onSliderEditing = value => {
        if(this.sound){
            this.sound.setCurrentTime(value);
            this.setState({playSeconds:value});
        }
    }

    play = async () => {
        if(this.sound){
            this.sound.play(this.playComplete);
            this.setState({playState:'playing'});
        }else{
            const filepath = CONFIG.API.URL_GET_ITEM + this.state.data.path;
            console.log('[Play]', filepath);
    
            this.sound = new Sound(filepath, '', (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    this.setState({playState:'paused'});
                }else{
                    this.setState({playState:'playing', duration:this.sound.getDuration()});
                    this.sound.play(this.playComplete);
                }
            });    
        }
    }
    playComplete = (success) => {
        if(this.sound){
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
                Alert.alert('Notice', 'audio file error. (Error code : 2)');
            }
            this.setState({playState:'paused', playSeconds:0});
            this.sound.setCurrentTime(0);
        }
    }

    pause = () => {
        if(this.sound){
            this.sound.pause();
        }

        this.setState({playState:'paused'});
    }

    jumpPrev15Seconds = () => {this.jumpSeconds(-15);}
    jumpNext15Seconds = () => {this.jumpSeconds(15);}
    jumpSeconds = (secsDelta) => {
        if(this.sound){
            this.sound.getCurrentTime((secs, isPlaying) => {
                let nextSecs = secs + secsDelta;
                if(nextSecs < 0) nextSecs = 0;
                else if(nextSecs > this.state.duration) nextSecs = this.state.duration;
                this.sound.setCurrentTime(nextSecs);
                this.setState({playSeconds:nextSecs});
            })
        }
    }

    getAudioTimeString(seconds){
        const h = parseInt(seconds/(60*60));
        const m = parseInt(seconds%(60*60)/60);
        const s = parseInt(seconds%60);

        return ((h<10?'0'+h:h) + ':' + (m<10?'0'+m:m) + ':' + (s<10?'0'+s:s));
    }

    closeModal = () => {
        bottomSheetRef.current.snapTo(1)
    }
    showModal = () => {
        
        this.setState({
            minimize: false,
            transparent: false,
        })
    }

    addPlaylist = () => {
        this.props.navigation.navigate('ChoosePlaylist', {mp3_id: this.state.data.id})
    }
    
    renderHeader = () => {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
        const durationString = this.getAudioTimeString(this.state.duration);
        const { data } = this.state;
        const images = CONFIG.API.URL_GET_ITEM+data.picture;
        return (
            <View style={{flex:1, height:deviceHeight,}}>
            <TouchableOpacity style={styles.modal} onPress = { () => this.showModal()}>
                <Image style={styles.modalImg} source={{uri:images}} />
                <View style={styles.modalText}>
                    <Text numberOfLines={1} style={{color:'#fff'}}>{data.name}</Text>
                    <Text style={{color:'#a3a6ae'}}>{data.singer}</Text>
                </View>
                <View style={styles.modalMedia}>
                    <TouchableOpacity style={styles.modalMediaButton}  onPress={this.jumpPrev15Seconds} >
                        <Image style={styles.modalIcon} source={CONFIG.IC_PREVIOUS} tintColor={'#fff'} />
                    </TouchableOpacity>
                    { this.state.playState == 'playing' &&
                        <TouchableOpacity 
                            onPress={this.pause} 
                            style={styles.modalMediaButton} 
                            >
                            <Image style={styles.modalIcon} source={CONFIG.IC_PAUSE} tintColor='#fff' />
                        </TouchableOpacity>
                        }
                    { this.state.playState == 'paused' &&
                        <TouchableOpacity 
                            onPress={this.play}
                            style={styles.modalMediaButton}
                            >
                            <Image style={styles.modalIcon} source={CONFIG.IC_PLAY} tintColor='#fff' />
                        </TouchableOpacity>
                        }
                    <TouchableOpacity style={styles.modalMediaButton} onPress={this.jumpNext15Seconds}>
                        <Image style={styles.modalIcon} source={CONFIG.IC_NEXT} tintColor={'#fff'} />
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.modalMediaButton} onPress={this.closeModal}>
                        <Image style={styles.modalIcon2} source={CONFIG.IC_CLOSE} tintColor={'#fff'} />
                    </TouchableOpacity>            
                </View>
            </TouchableOpacity>
            <ImageBackground source={require('../images/background.png')} style = {styles.container}>
            <View style={styles.headerModal}>
                <TouchableOpacity
                    style = {styles.backButton}
                    onPress = {() => this.closeModal}
                >
                    <Image style={styles.modalIcon} source = {CONFIG.IC_DOWN_ARROW} tintColor={'#fff'} />
                </TouchableOpacity>
                <View style ={{flex:8}}>
                    <Text numberOfLines={1} style={{color:'#fff'}}>{data.name}</Text>
                    <Text style={{color:'#a3a6ae'}}>{data.singer}</Text>
                </View>
                <TouchableOpacity
                    style = {styles.addPlaylist}
                    onPress = {() => this.addPlaylist()}
                >
                    <Image style={styles.modalIcon} source = {CONFIG.IC_UNLIKE} tintColor={'#fff'} />
                </TouchableOpacity>
            </View>
            <View style = {{flex:1, justifyContent: 'center'}}>
                <View style = {styles.imageNowPlay}>
                    <Animated.Image
                        style={{
                            width: 250,
                            height: 250,
                            borderRadius: 500,
                            transform: [{ rotate: RotateData }],
                        }}
                        source={{uri:images}}
                    />
                </View>
                <View style = {styles.infoSong}>
                    <Text style = {styles.styleSong}>{data.name}</Text>
                    <Text style = {styles.styleArtist}>{data.singer}</Text>
                </View>
                <View style={{marginVertical:30, marginHorizontal:15, flexDirection:'row'}}>
                    <Text style={{color:'white', alignSelf:'center'}}>{currentTimeString}</Text>
                    <Slider
                        maximumValue = { this.state.duration }
                        minimumTrackTintColor= { '#3ea512' }
                        maximumTrackTintColor= { '#fff' }
                        thumbTintColor = {'#3ea512'}
                        onSlidingStart= { this.onSliderEditStart }
                        onSlidingComplete= { this.onSliderEditEnd }
                        value = { this.state.playSeconds }
                        onValueChange= { this.onSliderEditing }
                        style={{flex:1, alignSelf:'center', marginHorizontal:Platform.select({ios:5})}}/>
                    <Text style={{color:'white', alignSelf:'center'}}>{durationString}</Text>
                </View>
                <View style = {styles.iconBar}>
                    <TouchableOpacity style={styles.mediaButton}>
                        <Image style = {styles.shuffleIcon} source={CONFIG.IC_SHUFFLE} tintColor='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaButton} onPress={this.jumpPrev15Seconds} >
                        <Image style = {styles.previousIcon} source={CONFIG.IC_PREVIOUS} tintColor='#fff' />
                    </TouchableOpacity>
                    { this.state.playState == 'playing' &&
                        <TouchableOpacity 
                            onPress={this.pause} 
                            style={styles.mediaButton} 
                            >
                            <Image style = {styles.playIcon} source={CONFIG.IC_PAUSE} tintColor='#fff' />
                        </TouchableOpacity>
                        }
                    { this.state.playState == 'paused' &&
                        <TouchableOpacity 
                            onPress={this.play}
                            style={styles.mediaButton}
                            >
                            <Image style = {styles.playIcon} source={CONFIG.IC_PLAY} tintColor='#fff' />
                        </TouchableOpacity>
                        }
                    <TouchableOpacity style={styles.mediaButton} onPress={this.jumpNext15Seconds} >
                        <Image style = {styles.previousIcon} source={CONFIG.IC_NEXT} tintColor='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaButton} >
                        <Image style = {styles.shuffleIcon} source={CONFIG.IC_LOOP} tintColor='#fff' />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        </View>
        )
    }
    
    render() {

        return(
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints = {[deviceHeight, 48]}
                renderHeader = {this.renderHeader}
            />

        )
    }
}
export default withNavigation(NowPlay);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    topBar: {
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
    },
    modal:{
        flexDirection:'row',
        backgroundColor:'#283149',
        height:50,
        alignItems:'center',
        borderWidth:0.2,
        borderColor:'gray',
        justifyContent:'flex-end',
    },
    modalImg:{
        width: 40,
        height: 40,
        borderRadius:20,
        flex:1,
        justifyContent:'center',
    },
    modalText:{
        padding: 10,
        flex:5,
    },
    modalIcon:{
        width: 25,
        height: 25,
    },
    modalIcon2:{
        width: 15,
        height: 15,
        paddingLeft: 5,
 
    },
    modalMedia:{
        flex:4,
        flexDirection:'row',
        justifyContent:'center',

    },
    modalMediaButton:{
        paddingHorizontal: 5,
        alignSelf: 'center',
    },
    headerModal:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 30
    }, 
    backButton: {
        alignSelf: 'center',
        paddingHorizontal: 10,
    },
    addPlaylist: {
        alignSelf: 'center',
        paddingRight: 10
    }
})
