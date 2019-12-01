import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Image, Dimensions, BackHandler, TouchableOpacity} from 'react-native'
import CONFIG from '../../config/custom'
// import { FlatList } from 'react-native-gesture-handler';
import {TextInput, ScrollView, FlatList} from 'react-native-gesture-handler';
import SERVICES from '../../services/index'

const width = Dimensions.get("window").width;

export default class Rank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: CONFIG.dataMp3,
            isLoading: true
        }
    }

    componentDidMount() {
        console.log(this.state.data);
    }

    showModal = async (item) => {
        this.updateViewMp3(item.id);
        if (this.state.modalVisible == true) {
            await this.setState({
                    modalVisible: false,
                })
            this.setState({
                modalVisible: true,
                suggest: item,
            })
        }if (this.state.modalVisible == false) {
            this.setState({
                modalVisible: true,
                suggest: item,
            })
        }

    }

    updateViewMp3 = async (mp3_id) => {
        let response = await SERVICES.updateViewMp3(mp3_id);
    }

    renderListRank(item,index) {
        const images = CONFIG.API.URL_GET_ITEM + item.picture;
        return(     
                <TouchableOpacity style={styles.suggestList}
                 onPress={() => this.showModal(item)}
                >
                    <Text style = {{alignSelf: 'center', color: '#fff', fontWeight: 'bold', marginRight: 10}}>{index + 1}</Text>
                    <Image source={{uri:images}} style={styles.suggestImage}></Image>
                    <View style={styles.suggestText}>
                        <Text style={styles.suggestTextTitle}>{item.name}</Text>
                        <Text style={styles.suggestTextSinger}>{item.singer}</Text>
                    </View>
                    {/* <Text style = {styles.styleViews}>{item.views} Views</Text> */}
                </TouchableOpacity>
        ) 
    }

    render() {
        return (
            <ImageBackground source = {CONFIG.BG} style = {styles.container}>
                <View>
                    <Image style = {styles.imageHeader} source = { require('../../images/rank.png')} />
                    <View>
                        <Text style = {styles.styleLabel}>Bảng xếp hạng</Text>
                    </View>
                    <FlatList
                        style = {styles.containerFlatlist}
                        data = {this.state.data.sort(function(a, b){
                            return b.views - a.views
                        })}
                        renderItem = {({item,index}) => this.renderListRank(item,index)}
                        keyExtractor={item=>item.id}
                        showsVerticalScrollIndicator = {false}
                    />
                </View>
            </ImageBackground>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageHeader: {    
        position: 'relative',  
        width: '100%',
        height: '50%'
    },
    styleLabel: {
        width: 150,
        backgroundColor: '#fff',
        textAlign: "center",
        padding: 10,
        borderRadius: 50,
        position: 'absolute',
        bottom: -20,
        alignSelf: 'center'
    },
    suggestList:{
        flexDirection:'row',
        marginLeft:5,
        marginTop:10,
    },
    suggestImage:{
        width:60,
        height:60,
         
    },
    suggestText:{
        marginLeft:10
    },
    suggestTextTitle:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'  
    },
    suggestTextSinger:{
        color:'#a3a6ae',
        fontSize:14
    },
    containerFlatlist: {
        marginTop: 20,
        marginHorizontal: 10
    },
    styleViews: {
        alignSelf: "flex-end",
        color: "#fff",
        alignItems: 'flex-end',
    }
})