import React, { Component } from 'react'
import { Text, View,Image,ImageBackground,StyleSheet,TouchableOpacity,TextInput  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler';
const artistList=[
    {
        id:'1',
        name:'The Way Home',
        time:'3:30'
    },
    {
        id:'2',
        name:'Please..',
        time:'3:30'
    },
    {
        id:'3',
        name:'Rainny Day',
        time:'3:30'
    },
    {
        id:'4',
        name:'Fantasy',
        time:'3:30'
    },
    {
        id:'5',
        name:'Better Than You',
        time:'3:30'
    },
    {
        id:'6',
        name:'See You Again',
        time:'3:30'
    },
    {
        id:'7',
        name:'Good For You',
        time:'3:30'
    },
]
export default class Artist extends Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    renderItem(item){
        return(
            
            <TouchableOpacity style={styles.itemList}>
      
                <Icon style={styles.itemListPlay} name="md-arrow-dropright-circle" size={30} color="#404b69"/>
                <View style={styles.itemListText}>
                    <Text style={{color:'#fff',fontWeight:'bold', fontSize:16}}>{item.name}</Text>
                    <Text style={{color:'#404b69'}}>{item.time}</Text>
                </View>
                <Icon style={styles.itemListMore} name="md-more" size={30} color="#fff"/>
              
            </TouchableOpacity>
        )
    }
    goBack(){
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <ImageBackground
                source={require('../images/background.png')} style={styles.container}
            >
                <View style={styles.header}>
                    <Icon onPress={() => this.goBack()} style={{flex:2,marginLeft:20}} name="md-arrow-back" size={30} color="#fff"/>
                    <Text style={{color:'#fff', fontWeight:'bold', fontSize:20, flex:6,textAlign:'center'}}>Artist</Text>
                    <Icon style={{flex:2, marginLeft:50}} name="md-search" size={30} color="#fff"/>
                </View>
                <View style={styles.main}>
                    <Image source={require('../images/singer/singer.png')} style={styles.artistImage} />
                    <View style={{marginTop:30}}>
                        <Text style={{color:'#fff',fontSize:24}}>Alicia Q</Text>
                        <Text style={{color:'#404b69'}}>3,254 Follower</Text>
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
                    
                        <FlatList
                            data={artistList}
                            renderItem={({item,index})=>this.renderItem(item)}
                            keyExtractor={item=>item.id}
                        />
                    
                </View>
                
            </ImageBackground>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1
    },
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
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
        width:400,
        
    },
   
    itemListMore:{
       flex:1
    },
    
    itemListText:{
        textAlign:'center',
        flex:8
      },
      itemListPlay:{
        flex:1,
        paddingLeft:20,
    },
})
