import React, { Component } from 'react';
import { Text, StyleSheet, View, BackHandler,Image, TextInput, ImageBackground,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler';



export default class NowPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleScreen: "Đang Phát",
        }
    }

    static navigationOptions = {
        header: null
    }

    // renderItem({item}) {
    //     return (
    //         <View>
    //             <Image source = {item.imgUrl}></Image>
    //         </View>
    //     )
    // } 
    goBack(){
        this.props.navigation.navigate('Home')
    }
    render() {
        return(
            <ImageBackground source={require('../images/background.png')} style = {styles.container}>
                <View style = {styles.topBar}>
                <View
                        
                        >
                    <Icon onPress={()=>this.goBack()} style={{flex:2}} name="md-arrow-back" size={30} color="#fff"/>
                        </View>
                    <View >
                        <Text style={styles.labelTopbar}>{this.state.titleScreen}</Text>
                    </View>
                    <View >
                        <Icon name="md-search" color="#fff" size={20}/>
                    </View>
                </View>
                <View style = {styles.imageNowPlay}>
                    <Image style = {{borderRadius: 500}} source = {require('../images/nowplay_img.png')}></Image>
                </View>
                <View style = {styles.infoSong}>
                    <Text style = {styles.styleSong}>The Way Home</Text>
                    <Text style = {styles.styleArtist}>DyTruong</Text>
                </View>
                <View style = {styles.progress}>
                    <Image style = {{alignItems: "center"}} source = {require('../images/progress.png')}></Image>
                </View>
                <View style = {styles.iconBar}>
                    <Icon style = {styles.styleIcon} name="ios-list" color="#fff" size={20}/>
                    <Icon style = {styles.styleIcon} name="ios-skip-backward" color="#fff" size={20}/>
                    <Icon style = {styles.styleIcon} name="md-pause" color="#fff" size={20}/>
                    <Icon style = {styles.styleIcon} name="ios-skip-forward" color="#fff" size={20}/>
                    <Icon style = {styles.styleIcon} name="ios-repeat" color="#fff" size={20}/>
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
        marginTop:50,
        color: "#fff",
        opacity: .5
    },
    progress: {
        alignItems: "center",
        marginTop: 50
    },
    styleIcon:{
        fontSize:30
    },
    iconBar: {
        marginTop: 35,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:30
    }
})