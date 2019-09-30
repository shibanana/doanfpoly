import React, { Component } from 'react'
import { Text, StyleSheet, View, BackHandler,Image, TextInput, ImageBackground,ScrollView,FlatList } from 'react-native'
const listRecommended=[
    {
        images:require('../images/recom-list.png'),
        title:'The RockiLand',
        description:'Playlist by Renee Zw',
    },
    {
        images:require('../images/recom-list2.png'),
        title:'The Taylor',
        description:'Playlist by Renee Zw',
    },
    {
        images:require('../images/recom-list.png'),
        title:'The Justin',
        description:'Playlist by Renee Zw',
    },
    {
        images:require('../images/recom-list2.png'),
        title:'The Shiba',
        description:'Playlist by Renee Zw',
    },

]
const listSinger=[
    {
        id:'1',
        images:require('../images/singer.png')
    },
    {
        id:'2',
        images:require('../images/singer2.png')
    },
    {
        id:'3',
        images:require('../images/singer3.png')
    }
]
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
    
    renderRecommend(item) {
        return (
            <View style={styles.recomList}>
            <Image source={item.images} style={styles.listImage}></Image>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Text style={styles.listDescription}>{item.description}</Text>
            </View>
        );
      }
    
    renderSinger(item){
        return(     
             <Image source={item.images} style={styles.singerImages}></Image>
        )
       
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
                <ScrollView style={flex=1}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.recomListAll}>
                        <Text style={styles.recomListTitle}>Dành cho bạn</Text>
                            <FlatList
                                data={listRecommended}
                                renderItem={({item,index})=>this.renderRecommend(item)}
                                keyExtractor={item=>item.title}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                    </View>
                    <View style={styles.recomListAll}>
                        <Text style={styles.recomListTitle}>Ca sĩ nổi bật</Text>
                        <View style={styles.singerList}>
                        <FlatList
                            data={listSinger}
                            renderItem={({item,index})=>this.renderSinger(item)}
                            keyExtractor={item=>item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />     
                        </View>   
                    </View>
                </ScrollView>
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
    },
    singerImages:{
        width:80,
        height:80,
        borderRadius:80/2,
    },
    singerList:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
  })
