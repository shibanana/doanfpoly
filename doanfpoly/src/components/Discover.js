import React, { Component } from 'react';
import { Text, StyleSheet, View, BackHandler,Image, TextInput, ImageBackground,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler';

const DATASLIDER = [
    {
        id :'1',
        imgUrl: require('../images/just4u_1.png'),
        song: "Đông Kiếm Em",
        artist: "Vũ."
    },
    {
        id : '2',
        imgUrl: require('../images/just4u_2.png'),
        song: "Vì Anh Vẫn",
        artist: "Nguyễn Hoàng Dũng"
    },
    {
        id : '3',
        imgUrl: require('../images/just4u_3.png'),
        song: "Đi Qua Mùa Hạ",
        artist: "Thái Đinh"
    },
    {
        id : '4',
        imgUrl: require('../images/just4u_4.png'),
        song: "Dù Chẳng Phải Anh",
        artist: "Đinh Mạnh Ninh"
    },
]

const DATALISTPOP = [
    {
        id: '1',
        imgUrl:  require('../images/dis_list_pop_4.png'),
        song: "Lạ Lùng",
        artist: "Vũ.",
        duration: "3:45"
    },
    {
        id: '2',
        imgUrl:  require('../images/dis_list_pop_1.png'),
        song: "Bài Này Chill Phết",
        artist: "Đen Vâu ft. Min",
        duration: "3:45"
    },
    {
        id: '3',
        imgUrl:  require('../images/dis_list_pop_2.png'),
        song: "Memories",
        artist: "Maroon 5",
        duration: "3:45"
    },
    {
        id: '4',
        imgUrl:  require('../images/dis_list_pop_3.png'),
        song: "Perfect",
        artist: "Ed Sheeran",
        duration: "3:45"
    },
    {
        id: '5',
        imgUrl:  require('../images/dis_list_pop_4.png'),
        song: "When We Were Young",
        artist: "Adele",
        duration: "3:45"
    },
]

function ItemSlider({ imgUrl, song, artist }) {
    return (
        <View style = {styles.containerItemSlider}>
            <Image style = {styles.itemSliderImg} source = {imgUrl}></Image>
            <Text style = {styles.itemSliderSong}>{song}</Text>
            <Text style = {styles.itemSliderArtist}>{artist}</Text>
        </View>
    )
}
function ItemPop({ imgUrl, song, artist, duration }) {
    return (
        <View style = {styles.containerPop}>
            <View>
                <Image style = {styles.itemSliderImg} source = {imgUrl}></Image>
            </View>
            <View>
                <Text style = {styles.itemSliderSong}>{song}</Text>
                <Text style = {styles.itemSliderArtist}>{artist}</Text>
            </View>
            <View>
                <Text style = {{color: "#fff"}}>{duration}</Text>
            </View>
        </View>
    )
}

export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleScreen: "Khám phá",
            labelSlider: "Đành riêng cho bạn",
            labelMostPop: "Phổ biến nhất"
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
                <View >
                    <View >
                        <Text style={styles.labelSlider}>{this.state.labelSlider}</Text>
                    </View>
                    <View>
                        <FlatList style = {styles.containerSlider}
                            horizontal = {true}
                            data = {DATASLIDER}
                            renderItem = {({item}) => (
                                <ItemSlider imgUrl = {item.imgUrl}
                                        song = {item.song}
                                        artist = {item.artist} />
                            )}
                            keyExtractor = {item => item.id}
                            showsHorizontalScrollIndicator= {false}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style = {styles.labelMostPop}>{this.state.labelMostPop}</Text>
                    </View>
                    <View style = {styles.listPop}>
                        <FlatList
                            data = {DATALISTPOP}
                            renderItem = {({item}) => (
                                <ItemPop imgUrl = {item.imgUrl}
                                    song = {item.song}
                                    artist = {item.artist}
                                    duration = {item.duration} />
                            )}
                            keyExtractor = {item => item.id}
                            // showsVerticalScrollIndicator= {false}
                            scrollEnabled={true}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
    slider: {
        flexDirection: "column"
    },
    labelSlider: {
        marginHorizontal: 45,
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold"
    },
    containerSlider: {
        marginTop: 10,
        marginHorizontal: 0,
        // marginLeft: 45
        // flexDirection: "row",
        // justifyContent: "space-around"
    },
    itemSliderImg: {
        // marginRight: 20,
        borderRadius: 5
    },
    itemSliderSong: {
        width: 150,
        color: "#fff",
        fontWeight: "bold"
    },
    containerItemSlider: {
        marginHorizontal: 10
    },
    itemSliderArtist: {
        color: "#fff",
        opacity: .5,
        fontWeight: "bold"
    },
    labelMostPop: {
        marginTop: 30,
        marginBottom: 20,
        marginHorizontal: 45,
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold"
    }
    ,
    containerPop: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    listPop: {
        marginHorizontal: 45
    }
})