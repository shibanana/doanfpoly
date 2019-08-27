import React, { Component } from 'react'
import { Text, StyleSheet, View, BackHandler,Image, TextInput, ImageBackground,ScrollView } from 'react-native'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', function() {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.
          
            return true;
          });
    }
    render() {
        return (
            <ImageBackground source={require('../images/background.png')} style={styles.container}>
                <View style={styles.topbar}>
                    <View style={styles.topBarImages}>
                        <Image source={require('../images/user.png')} style={{width: 40, height: 40}}></Image>
                    </View>
                    <TextInput
                        style={styles.topBarInput}
                        placeholder="Bạn đang nghĩ gì?"
                        placeholderTextColor = "#a3a6ae"
                    />
                </View>
                <View style={styles.recomListAll}>
                    <Text style={styles.recomListTitle}>Dành cho bạn</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment='center'
                        
                    >
                        <View style={styles.recomList}>
                            <Image source={require('../images/recom-list.png')} style={styles.listImage} ></Image>
                            <Text style={styles.listTitle}>The RockiLand</Text>
                            <Text style={styles.listDescription}>Playlist by Renee Zw</Text>
                        </View>
                        <View style={styles.recomList}>
                            <Image source={require('../images/recom-list2.png')} style={styles.listImage}></Image>
                            <Text style={styles.listTitle}>The RockiLand</Text>
                            <Text style={styles.listDescription}>Playlist by Renee Zw</Text>
                        </View>
                        <View style={styles.recomList}>
                            <Image source={require('../images/recom-list.png')} style={styles.listImage}></Image>
                            <Text style={styles.listTitle}>The RockiLand</Text>
                            <Text style={styles.listDescription}>Playlist by Renee Zw</Text>
                        </View>
                        <View style={styles.recomList}>
                            <Image source={require('../images/recom-list.png')} style={styles.listImage}></Image>
                            <Text style={styles.listTitle}>The RockiLand</Text>
                            <Text style={styles.listDescription}>Playlist by Renee Zw</Text>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
            
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
        marginBottom:30,
    },
    recomList:{
        marginRight:20,
        marginTop:10,
        marginBottom:10
        
    },
    recomListTitle:{
        color:'#fff',
        fontSize:18,
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
    }
  })
