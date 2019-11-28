import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Dimensions, FlatList, Image } from 'react-native';
import CONFIG from '../../config/custom';
import Modal from "react-native-modal";
import SERVICES from '../../services/index';
import { NavigationActions } from 'react-navigation';
const width = Dimensions.get('window').width;
export default class ChoosePlaylist extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: props.isVisible,
            playlistName: '',
            userID: CONFIG.dataUser[0].id,
            userName: CONFIG.dataUser[0].name,
            isLoading: false,
            dataPlaylist: [],
            mp3_id: props.navigation.state.params.mp3_id,
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'CHỌN PLAYLIST',
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
    // LIFECYCLE
    componentDidMount = () => {
        this.viewPlaylist()
    }

    showModal = () => {
        this.setState({
            isVisible: true,
        })
    }
    
    closeModal = () => {
        this.setState({
            isVisible: false,
        })
    }
    viewPlaylist = async () => {
        let response = await SERVICES.viewPlaylist(this.state.userID);
        if (response){
            this.setState({
                dataPlaylist: response,
            })
        } else {
            console.log('deo co gi')
        }
    }
    addMp3ToPlaylist =  (playlist_id) => {
        SERVICES.addMp3Playlist(this.state.mp3_id, playlist_id);
        this.props.navigation.dispatch(NavigationActions.back());
        console.log('ok rui')
    }
    renderPlaylist = ({item, index}) => {
        return (
            <TouchableOpacity style = {styles.playlistItem} onPress = {() => this.addMp3ToPlaylist(item.playlist_id)} >
                <Image style = {styles.itemImg} source = {CONFIG.PLAYLIST} />
                <View style = {styles.itemContent}>
                    <Text style = {styles.itemName}>{item.playlist_name}</Text>
                    <Text style = {styles.itemAuthor}>{this.state.userName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
                <ImageBackground
                    style = {styles.container}
                    source = {CONFIG.BG}
                >
                    <TextInput
                        style={styles.topBarInput}
                        placeholder={this.state.mp3_id}
                        placeholderTextColor = "#a3a6ae"
                    />
                    <FlatList
                        data = {this.state.dataPlaylist}
                        renderItem = {({item, index}) => this.renderPlaylist({item, index})}
                        keyExtractor = {item => item.playlist_id}
                        style = {styles.list}
                    />
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    topBarInput:{
        borderRadius:25,
        backgroundColor:'#404b69',
        alignItems:'center',  
        margin:5,
        fontSize:14,
        paddingLeft:15,
        color:'#fff',
    },
    playlistButton: {
        backgroundColor: '#3ea512',
        borderRadius: 25,
        alignSelf: 'center',
        width: 200,
        marginVertical: 20,
    },
    textButton: {
        color: '#fff',
        padding: 10,
        alignSelf: 'center'
    },
    modal: {
        marginHorizontal:70,
        transform: [{translateY: -width/3}],
        backgroundColor: '#fff'
    },
    modalButton: {
        flexDirection: 'row',
    },
    modalCancel: {
        flex:1,
        justifyContent: 'center',
        padding: 10,
        borderTopWidth:0.4,
        borderRightWidth:0.4,
        borderColor: 'gray'
    },
    modalAccept: {
        flex:1,
        justifyContent: 'center',
        padding: 10,
        borderTopWidth:0.4,
        borderColor: 'gray'
    },
    textCancel: {
        textAlign: 'center',
    },
    textAccept: {
        textAlign: 'center',
        color: '#3ea512',
    },
    modalTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
    }, 
    modalInput: {
        fontSize: 16,
        marginBottom: 10,
    },
    playlistItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    itemImg: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    itemContent: {
        flex: 8,
        paddingLeft: 10,
    },
    itemName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    itemAuthor: {
        color: '#a3a6ae'
    },
    list: {
        margin: 10,
    },
})