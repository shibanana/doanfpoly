import React, { Component } from 'react'
import { Text, StyleSheet, View, BackHandler,Image, TextInput, ImageBackground,ScrollView,FlatList,TouchableOpacity, StatusBar } from 'react-native';
import NowPlay from './NowPlay';
import CONFIG from '../config/custom';
import  SERVICES from '../services/index'
const listRecommended=[
    {
        id:'1',
        images:require('../images/recommended/recom-list.png'),
        title:'The RockiLand',
        description:'Playlist by Renee Zw',
    },
    {
        id:'2',
        images:require('../images/recommended/recom-list2.png'),
        title:'The Taylor',
        description:'Playlist by Renee Zw',
    },
    {
        id:'3',
        images:require('../images/recommended/recom-list.png'),
        title:'The Justin',
        description:'Playlist by Renee Zw',
    },
    {
        id:'4',
        images:require('../images/recommended/recom-list2.png'),
        title:'The Shiba',
        description:'Playlist by Renee Zw',
    },

]
const listSinger=[
    {
        id:'1',
        images:require('../images/singer/singer.png'),
        singerName:'Alicia Q'
    },
    {
        id:'2',
        images:require('../images/singer/singer2.png'),
        singerName:'Lana Del Roj'
    },
    {
        id:'3',
        images:require('../images/singer/singer3.png'),
        singerName:'Camilla Nabilla'
    },
    {
        id:'4',
        images:require('../images/singer/singer.png'),
        singerName:'Alicia Q'
    },
]
const listPlaylist=[
    {
        id:'1',
        images:require('../images/hotplaylist/hotplaylist-1.png'),
        title:'Summer Time',
        description:'Playlist by Renee Zwalger',
    },
    {
        id:'2',
        images:require('../images/hotplaylist/hotplaylist-2.png'),
        title:'Nature Accoustic',
        description:'Playlist by Denis Buroughi',
    },
    {
        id:'3',
        images:require('../images/hotplaylist/hotplaylist-3.png'),
        title:'Weekly Blues',
        description:'Playlist by Renee Zwalger',
    },
    {
        id:'4',
        images:require('../images/hotplaylist/hotplaylist-4.png'),
        title:'Coffee Jaazy',
        description:'Playlist by Denis Buroughi',
    },
]

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            isLoading:true,
            isPlaying:false,
            modalVisible:false,
            suggest: [],
        }
    }
    
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    componentDidMount = async () => {
        BackHandler.addEventListener('hardwareBackPress', function() {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.
          
            return true;
        });
        
        let response = await SERVICES.getMP3();
        if(response) {
            this.setState({
                data: response,
                isLoading: false,

            })
        } else {
            console.log("error")
        }
    }
    login(){
        if(!CONFIG.dataUser) {
            this.props.navigation.navigate('MainLogin')
        }
    }
    Artist(){
        this.props.navigation.navigate('Music')
    }
    Discover(){
        this.props.navigation.navigate('Music')
    }
    NowPlay(){
        this.props.navigation.navigate('NowPlay')
    }
    Music(item){
        this.props.navigation.navigate('Music',{item})
    }
    showModal = async (item) => {
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
    showPlaylist = () => {
        this.props.navigation.navigate('PlaylistItem')
    }
    callbackPlaying = ( visible ) => {
        this.setState({
            modalVisible: visible,

        })
    }
    renderRecommend(item) {
        return (
            <TouchableOpacity style={styles.recomList}
            onPress={() => this.showPlaylist()}>
            <Image source={item.images} style={styles.listImage}></Image>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Text style={styles.listDescription}>{item.description}</Text>
            </TouchableOpacity>
        );
      }
    
    renderSinger(item){
        return(     
            <TouchableOpacity style={styles.singerList}
            onPress={() => this.Artist()}> 
                <Image source={item.images} style={styles.singerImages}></Image>
                <Text style={styles.singerName}>{item.singerName}</Text>
            </TouchableOpacity>
            
        ) 
    }
    renderPlaylist(item){
        return(     
            <View style={styles.singerList}>
                <TouchableOpacity
                    onPress={() => this.Discover()}
                >
                    <Image source={item.images} style={styles.singerImages}></Image>
                    <Text style={styles.singerList}>{item.title}</Text>
                    <Text style={styles.singerList}>{item.description}</Text>
                </TouchableOpacity>
            </View>
            
        ) 
    }
    renderSuggest(item){
        const images = CONFIG.API.URL_GET_ITEM + item.picture;
        return(     
                <TouchableOpacity style={styles.suggestList}
                 onPress={() => this.showModal(item)}
                >
                    <Image source={{uri:images}} style={styles.suggestImage}></Image>
                    <View style={styles.suggestText}>
                        <Text style={styles.suggestTextTitle}>{item.name}</Text>
                        <Text style={styles.suggestTextSinger}>{item.singer}</Text>
                    </View>
                </TouchableOpacity>
            
        ) 
    }
    
    render() {
        return (
            <>
            <StatusBar backgroundColor={'#283149'} /> 
            <ImageBackground source={require('../images/background.png')} style={styles.container}>
                    <View style={styles.topbar}>
                        <TouchableOpacity style={styles.topBarImages} onPress={() => this.login()}>
                            <Image source={require('../images/user.png')} style={{width: 40, height: 40}}></Image>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.topBarInput}
                            placeholder="Tìm kiếm"
                            placeholderTextColor = "#a3a6ae"
                        />
                    </View>
                    <ScrollView style={flex=1}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.recomListAll}>
                            <Text style={styles.recomListTitle}>Dành cho bạn</Text>
                                <FlatList
                                    data={listRecommended}
                                    renderItem={({item,index})=>this.renderRecommend(item)}
                                    keyExtractor={item=>item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                />
                        </View>
                        <View style={styles.recomListAll}>
                            <Text style={styles.recomListTitle}>Ca sĩ nổi bật</Text>    
                                <FlatList
                                    data={listSinger}
                                    renderItem={({item,index})=>this.renderSinger(item)}
                                    keyExtractor={item=>item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                />     
                        </View>
                        <View style={styles.recomListAll}>
                            <Text style={styles.recomListTitle}>Hot Playlist</Text>    
                            <View style={styles.playlist}>
                                <TouchableOpacity style={styles.playlistItem}
                                 >
                                    <Image source={listPlaylist[0].images} style={styles.playlistImage}></Image>
                                    <Text style={styles.playlistTitle}>{listPlaylist[0].title}</Text>
                                    <Text style={styles.playlistDescription}>{listPlaylist[0].description}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.playlistItem}>
                                    <Image source={listPlaylist[1].images} style={styles.playlistImage}></Image>
                                    <Text style={styles.playlistTitle}>{listPlaylist[1].title}</Text>
                                    <Text style={styles.playlistDescription}>{listPlaylist[1].description}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.playlist}>
                                <TouchableOpacity style={styles.playlistItem}>
                                    <Image source={listPlaylist[2].images} style={styles.playlistImage}></Image>
                                    <Text style={styles.playlistTitle}>{listPlaylist[2].title}</Text>
                                    <Text style={styles.playlistDescription}>{listPlaylist[2].description}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.playlistItem}>
                                    <Image source={listPlaylist[3].images} style={styles.playlistImage}></Image>
                                    <Text style={styles.playlistTitle}>{listPlaylist[3].title}</Text>
                                    <Text style={styles.playlistDescription}>{listPlaylist[3].description}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {!this.state.isLoading ? (
                            <View style={styles.recomListAll}>
                            <Text style={styles.recomListTitle}>Gợi Ý</Text>
                            <FlatList
                                    data={this.state.data}
                                    renderItem={({item,index})=>this.renderSuggest(item)}
                                    keyExtractor={item=>item.id}
                                    scrollEnabled={false}
                                />   
                            </View>
                        ) : null}

                    </ScrollView>
            </ImageBackground>
            {this.state.modalVisible ? (
                <NowPlay
                    data = {this.state.suggest}
                    callbackClose = {this.callbackPlaying}
                />
            ) : null}
            </>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:20,
        paddingRight:20,
    },
    topbar:{
        flexDirection:'row',
        height:50,
        marginTop:15,
    },
    topBarImages:{
        flex:1,
        marginBottom:5,
        marginTop:5,
        alignItems:'center',
        marginRight:10,  
        paddingLeft:10, 
    },
    topBarInput:{
        flex:9,
        borderRadius:25,
        backgroundColor:'#404b69',
        alignItems:'center',  
        margin:5,
        fontSize:16,
        paddingLeft:15,
        color:'#fff',
    },
    recomListAll:{
        marginTop:30,
    },
    recomList:{
        marginRight:20,
        marginTop:10,
        marginBottom:10
        
    },
    recomListTitle:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    listTitle:{
        color:'#fff',
        fontSize:14,
    },
    listDescription:{
        color:'#a3a6ae',
        fontSize:12,
    },
    listImage:{
        width:200,
        height:100,
        borderRadius:5,
    },
    singerImages:{
        width:100,
        height:100,
        borderRadius:100/2,
        marginBottom:5
    },
    singerName:{
        color:'#fff',
        textAlign:'center',
    },
    singerList:{
        marginRight:20,
        marginLeft:10,
        marginTop:10,
    },
    playlist:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    playlistItem:{
        flex:1,
        justifyContent:'space-between',
        marginLeft:10
    },
    playlistImage:{
        borderRadius:5,
        height:227,
        width:162
    },
    playlistTitle:{
        color:'#fff',  
        fontSize:15,
        fontWeight:'bold'  
    },
    playlistDescription:{
        color:'#a3a6ae',
        fontSize:13
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

  })
