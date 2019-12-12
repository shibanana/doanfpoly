import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity,Image, TextInput, ImageBackground,ScrollView, Dimensions, FlatList } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls'
import styles from './styles';
import VideoPlayer from 'react-native-video-controls';
import config from '../../config/custom'
const deviceHeight = Dimensions.get('window').height;

export default class MVNowPlay extends Component {
    videoPlayer;
    constructor(props) {
        super(props);
        this.state = {
            titleScreen: 'Videos',
            data: config.dataMp4
        }
       
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Videos',
        headerTintColor: '#fff',
        headerTransparent: true,
        headerStyle: {
            backgroundColor: 'transparent',
            // marginTop: DEVICE.OS === 'ios' ? 40 : 20, 
        },
        headerTitleStyle:{
            fontSize: 22,
            fontWeight:'bold'
        },
        headerLeft: <TouchableOpacity style={{paddingLeft:15, alignItems: 'center'}} onPress={() => navigation.goBack()}>
                        <Icon name="md-arrow-back" size={30} color="#fff"/>
                    </TouchableOpacity>,
        headerRight:<TouchableOpacity style={{paddingRight:15, alignItems: 'center'}}>
                        <Icon name="md-search" size={30} color="#fff"/>
                    </TouchableOpacity>
    });

    renderSuggestMV(item) {
        const path = config.API.URL_GET_ITEM + item.path;
        const name = item.name;
        const singer = item.singer;
        const images = config.API.URL_GET_ITEM + item.picture;
        return(
            <TouchableOpacity style = {styles.suggestList}
                onPress = {() => this.props.navigation.navigate("MVNowPlay", {path, name, singer})}>
                <Image source = {{uri: images}} style = {styles.suggestImage}></Image>
                <View style={styles.suggestText}>
                    <Text style = {styles.suggestTextTitle}>{item.name}</Text>
                    <Text style = {styles.suggestTextSinger}>{item.singer}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return(
        <ImageBackground source={config.BG} style = {styles.container} >
        <View style = {{height: 300, marginTop: 50}} >
            <VideoPlayer
                source={{ uri: this.props.navigation.state.params.path }}
            />
            <View style = {styles.infoContainer}>
                <Text style = {styles.styleName}>{this.props.navigation.state.params.name}</Text>
                <Text style = {styles.styleSinger}>{this.props.navigation.state.params.singer}</Text>
            </View>
        </View>
        <View style = {{borderBottom: 1, borderBottomColor: '#fff'}}>
            <Text style = {{fontSize:20, color: "#fff", fontWeight:'bold', marginLeft: 10}}>MV Đề Xuất</Text>
        </View>
        <ScrollView 
            showsVerticalScrollIndicator = {false}>
            <View style = {styles.containerListMV}>
                <FlatList
                    data = {this.state.data}
                    renderItem = {({item,index}) => this.renderSuggestMV(item)}
                    keyExtractor={item=>item.id}
                    showsVerticalScrollIndicator = {false}
                />
            </View>
        </ScrollView>
        </ImageBackground>
  
        )
    }


}


