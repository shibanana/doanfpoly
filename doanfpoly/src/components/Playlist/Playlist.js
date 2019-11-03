import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Dimensions, FlatList, Image } from 'react-native';
import CONFIG from '../../config/custom';
import Modal from "react-native-modal";
import SERVICES from '../../services/index';
const width = Dimensions.get('window').width;
export default class Playlist extends Component {

    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
            playlistName: '',
            userID: CONFIG.dataUser[0].id,
            userName: CONFIG.dataUser[0].name,
            isLoading: false,
            dataPlaylist: [],
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'PLAYLIST',
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

    addPlaylist = async () => {
        let response = await SERVICES.addPlaylist(this.state.playlistName, this.state.userID);
        if (response.status == 200){
            console.log('co kqua')
        } else {
            console.log('deo co gi')
        }
        this.closeModal();
        this.viewPlaylist();
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
    renderPlaylist = ({item, index}) => {
        return (
            <TouchableOpacity style = {styles.playlistItem} >
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
                    placeholder="Tìm kiếm"
                    placeholderTextColor = "#a3a6ae"
                />
                <TouchableOpacity
                    style = {styles.playlistButton}
                    onPress = {() => this.showModal()}
                >
                    <Text style = {styles.textButton}>{"TẠO PLAYLIST"}</Text>
                </TouchableOpacity>
                <Modal
                    isVisible= {this.state.isVisible}
                    animationIn = {'slideInDown'}
                    animationOut = {'slideOutUp'}
                    avoidKeyboard = {true}
                    backdropOpacity = {0.4}
                >
                    <View style = {styles.modal}>
                        <Text style = {styles.modalTitle}>TẠO PLAYLIST</Text>
                        <TextInput
                            placeholder="Tên playlist"
                            placeholderTextColor = "#fff"
                            style = {styles.modalInput}
                            onChangeText={(text) => this.setState({playlistName: text})}
                            value={this.state.playlistName}
                        />
                        <View style = {styles.modalButton}>
                            <TouchableOpacity
                                onPress = {() => this.closeModal()}
                                style = {styles.modalCancel}
                            >
                                <Text style = {styles.textCancel}>{"HỦY BỎ"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress = {() => this.addPlaylist()}
                                style = {styles.modalAccept}
                            >
                                <Text style = {styles.textAccept}>{"TIẾP TỤC"}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>
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
    }
})