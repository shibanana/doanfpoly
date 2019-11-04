import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native'
import CONFIG from '../../config/custom';

const width = Dimensions.get('window').width;
const data = [
    {
        name: 'Bước qua đời nhau',
        singer: 'Lê Bảo Bình',
        id:'1'
    },
    {
        name: 'Bước qua đời nhau',
        singer: 'Lê Bảo Bình',
        id:'2'
    },
    {
        name: 'Bước qua đời nhau',
        singer: 'Lê Bảo Bình',
        id:'3'
    },
]
export default class PlaylistItem extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    goBack = () => {
        this.props.navigation.navigate('Playlist')
    }

    renderPlaylist = ({item, index}) => {
        return (
            <TouchableOpacity style = {styles.itemPlaylist}>
                <Text style = {styles.itemIndex}>{index+1}</Text>
                <View style = {styles.itemInfo}>
                    <Text style = {styles.infoSong}>{item.name}</Text>
                    <Text style = {styles.infoSinger}>{item.singer}</Text>
                </View>
                <Image style = {styles.itemIcon} source = {CONFIG.IC_MORE} tintColor = {'#fff'} />
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <ImageBackground style = {styles.container} source = {CONFIG.BG} >
                <ImageBackground
                    style = {styles.header}
                    source = {CONFIG.PLAYLIST}
                    blurRadius = {10}
                >
                    <TouchableOpacity style = {styles.buttonBack} onPress = {() => this.goBack()}>
                        <Image style = {styles.iconBack} source = {CONFIG.IC_BACK} tintColor = {'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonMore}>
                        <Image style = {styles.iconMore} source = {CONFIG.IC_MORE} tintColor = {'#fff'} />
                    </TouchableOpacity>
                    <View style = {styles.headerInfo}>
                        <Image style = {styles.infoImg} source = {CONFIG.PLAYLIST} />
                        <Text style = {styles.infoName}>dsa</Text>
                        <Text style = {styles.infoIcon}>PLAYLIST</Text>
                    </View>
                    <TouchableOpacity style = {styles.random} >
                        <Text style = {styles.randomText} >PHÁT NGẪU NHIÊN</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <FlatList
                    data = {data}
                    renderItem = {({item, index}) => this.renderPlaylist({item, index})}
                    keyExtractor = {item => item.id}
                 />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: width-100,
        position: 'relative',
        backgroundColor: '#000',
        opacity: 1,
        marginBottom: 30,
    },
    headerInfo: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0, 
        bottom: 0
    },
    infoImg: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    infoName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    infoIcon: {
        color: '#fff',
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 5,
    },
    random: {
        backgroundColor: '#3ea512',
        position: 'absolute',
        alignSelf: 'center',
        bottom: -20,
        width: 200,
        borderRadius: 20
    },
    randomText: {
        color: '#fff',
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    iconBack: {
        width: 20,
        height: 20,
    },
    iconMore: {
        width: 25,
        height: 25,
    },
    buttonBack: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 10,
    },
    buttonMore: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
    },
    itemPlaylist: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 5,
    },
    itemIndex: {
        alignSelf: 'center',
        color: '#a3a6ae',
        paddingHorizontal: 15
    },
    itemInfo: {
        flex: 8,
        alignSelf: 'center'
    },
    infoSong: {
        color: '#fff',
        fontSize: 16
    },
    infoSinger: {
        color: '#a3a6ae'
    },
    itemIcon: {
        width: 25, 
        height: 25,
        alignSelf: 'center'
    }
})