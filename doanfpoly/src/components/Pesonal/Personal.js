import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, Switch } from 'react-native';
import CONFIG from '../../config/custom';
import styles from './styles'
export default class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: CONFIG.dataUser[0],
            switchValue:false,
        }
    }

    showPlaylist = () => {
        this.props.navigation.navigate('Playlist')
    }
    logout= () => {
        this.props.navigation.navigate('Auth')
    }
    render() {
        const { data } = this.state;
        return (
            <ImageBackground
                style = {styles.container}
                source = {CONFIG.BG}
            >
                <View style = {styles.header}>
                    <Text style ={styles.headerText}>{"CÁ NHÂN"}</Text>
                </View>
                <View style = {styles.user}>
                    <Image style = {styles.userAvatar} source ={CONFIG.USER} />
                    <View style = {styles.userInfo}>
                        <Text style = {styles.userInfoName}>{data.name}</Text>
                        <Text style = {styles.userName}>{data.username}</Text>
                    </View>
                </View>
                <View style = {styles.library}>
                    <Text style = {styles.libraryTitle}>{"THƯ VIỆN"}</Text>
                    <TouchableOpacity style = {styles.libraryItem}>
                        <Image style = {styles.libraryIcon} source ={CONFIG.IC_SONG} tintColor = {'#fff'} />
                        <Text style = {styles.libraryText}>{"Bài hát"}</Text>
                        <Image style = {styles.nextArrowIcon} source ={CONFIG.IC_NEXT_ARROW} tintColor = {'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.libraryItem} onPress = {() => this.showPlaylist()}>
                        <Image style = {styles.libraryIcon} source ={CONFIG.IC_PLAYLIST} tintColor = {'#fff'} />
                        <Text style = {styles.libraryText}>{"Playlist"}</Text>
                        <Image style = {styles.nextArrowIcon} source ={CONFIG.IC_NEXT_ARROW} tintColor = {'#fff'} />
                    </TouchableOpacity>
                </View>
                <View style = {styles.library}>
                    <Text style = {styles.libraryTitle}>{"CÁ NHÂN"}</Text>
                    <TouchableOpacity style = {styles.libraryItem}>
                        <Image style = {styles.libraryIcon} source ={CONFIG.IC_NOTIFICATION} tintColor = {'#fff'} />
                        <Text style = {styles.libraryText}>{"Thông báo"}</Text>
                        <Switch  
                            value={this.state.switchValue}
                            onValueChange={(switchValue)=>this.setState({switchValue})}
                            trackColor ={{true: '#3ea512'}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.libraryItem}>
                        <Image style = {styles.libraryIcon} source ={CONFIG.IC_UNLIKE} tintColor = {'#fff'} />
                        <Text style = {styles.libraryText}>{"Yêu thích"}</Text>
                        <Image style = {styles.nextArrowIcon} source ={CONFIG.IC_NEXT_ARROW} tintColor = {'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.libraryItem}>
                        <Image style = {styles.libraryIcon} source ={CONFIG.IC_BLOCK} tintColor = {'#fff'} />
                        <Text style = {styles.libraryText}>{"Danh sách chặn"}</Text>
                        <Image style = {styles.nextArrowIcon} source ={CONFIG.IC_NEXT_ARROW} tintColor = {'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.libraryItemLogout}
                        
                    >
                        <Image style = {styles.libraryIcon} source ={CONFIG.IC_LOGOUT} tintColor = {'#fff'} />
                        <Text style = {styles.libraryText}>{"Đăng xuất tài khoản"}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
