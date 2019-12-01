import React, { Component } from 'react'
import { Text, View,Image,ImageBackground,StyleSheet,TouchableOpacity,TextInput  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler';
import NowPlay from './NowPlay'
import CONFIG from '../config/custom';
import SERVICES from '../services/index';

export default class Artist extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            data: [],
            modalVisible: false,
        }
    }

    componentDidMount = async () =>{
       const singer = this.props.navigation.state.params.singerData.singer;
       let response = await SERVICES.viewMp3Singer(singer);
       if (response) {
           this.setState({
               isLoading: true,
               data: response
           })
       }
    }
    /** HEADER CONFIGURATION **/
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Artist',
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


    showModal = async (item) => {
        this.updateViewMp3(item.id);
        if (this.state.modalVisible == true) {
            await this.setState({
                    modalVisible: false,
                })
            this.setState({
                modalVisible: true,
                item: item,
            })
        }if (this.state.modalVisible == false) {
            this.setState({
                modalVisible: true,
                item: item,
            })
        }

    }

    onCloseMp3 = (data) => {
        if (data) {
            this.setState({
                modalVisible: false
            })
        }
    }

    updateViewMp3 = async (mp3_id) => {
        let response = await SERVICES.updateViewMp3(mp3_id);
    }
    renderItem(item){
        return(
            <TouchableOpacity 
                style={styles.itemList}
                onPress={()=> this.showModal(item)}
            >
                <Icon style={styles.itemListPlay} name="md-arrow-dropright-circle" size={30} color="#404b69"/>
                <View style={styles.itemListText}>
                    <Text style={{color:'#fff',fontWeight:'bold', fontSize:16}}>{item.name}</Text>
                    <Text style={{color:'#404b69'}}>{item.singer}</Text>
                </View>
                <Icon style={styles.itemListMore} name="md-more" size={30} color="#fff"/>
            </TouchableOpacity>
        )
    }
    goBack(){
        this.props.navigation.navigate('Home')
    }
    render() {
        const singerData = this.props.navigation.state.params.singerData;
        const images = CONFIG.API.URL_GET_ITEM + singerData.avatar
        return (
            <ImageBackground
                source={require('../images/background.png')} style={styles.container}
            >
                <View style={styles.main}>
                    <Image source={{uri:images}} style={styles.artistImage} />
                    <View style={{marginTop:10}}>
                        <Text style={{color:'#fff',fontSize:24, textAlign:'center', paddingVertical: 10}}>{singerData.singer}</Text>
                        <Text style={{color:'#404b69', textAlign:'center'}}>3,254 Follower</Text>
                    </View>
                    <View style={styles.artistButton}>
                        <TouchableOpacity style={styles.artistPlay}>
                            <Text style={{color:'#fff',textAlign:'center',paddingTop:10}}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.artistFollow}>
                            <Text style={{color:'#fff',textAlign:'center',paddingTop:10}}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.artistMore}>
                            <Icon style={{paddingTop:5,paddingBottom:5,paddingRight:10,paddingLeft:10}} name="ios-more" size={30} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#fff',marginRight:'70%',marginBottom:20}}>Popular</Text>
                    {this.state.isLoading ? (
                        <FlatList
                            data={this.state.data}
                            renderItem={({item,index})=>this.renderItem(item)}
                            keyExtractor={item=>item.id}
                        />
                    ) : null}     
                </View>
                {this.state.modalVisible ? (
                <NowPlay 
                    data={this.state.item}
                    onCloseMp3={this.onCloseMp3}
                />
            ) : null}
            </ImageBackground>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        marginTop: 60,
    },
    header:{
        flexDirection:'row',
        marginTop:10
    },
    artistImage:{
        width:170,
        height:170,
        borderRadius:170/2
    },
    artistButton:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:30
    },
    artistPlay:{
        backgroundColor:'#3ea513',
        borderRadius:15,
        width:80,
        height:40,
        marginRight:20,
        marginLeft:10
    },
    artistFollow:{
        borderWidth:1,
        borderColor:'#404b69',
        borderRadius:15,
        width:80,
        height:40,
        marginRight:20,
    },
    artistMore:{
        borderWidth:1,
        borderColor:'#404b69',
        borderRadius:25,
        height:40,
        marginRight:20,
    },
    itemList:{
        flexDirection:'row',
        marginVertical: 5,
        justifyContent:'center',
        alignItems:'center'
    },
   
    // itemListMore:{
    //    flex:1
    // },
    
    itemListText:{
        textAlign:'center',
        width: '90%',
        paddingLeft: 10
      },
})
