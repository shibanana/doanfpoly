import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ImageBackground , Image} from 'react-native'
import MVNowPlay from '../MVItem/MVNowPlay';
import config from '../../config/custom'
import styles from './styles'
import Icon from 'react-native-vector-icons'
import { TextInput, ScrollView, FlatList } from 'react-native-gesture-handler';

const listMV = [
    {
        id: "1",
        images: require('../../images/recommended/recom-list.png'),
        titleMV: "Vì Yêu Là Nhớ",
        artistMV: "Han Sara"
    },
    {
        id: "2",
        images: require('../../images/recommended/recom-list.png'),
        titleMV: "Trời Giấu Trời Mang Đi",
        artistMV: "AMEE"
    },
    {
        id: "3",
        images: require('../../images/recommended/recom-list2.png'),
        titleMV: "Bài Ca Tình Yêu",
        artistMV: "Đinh Mạnh Ninh"
    },
    {
        id: "4",
        images: require('../../images/recommended/recom-list.png'),
        titleMV: "Có Khi",
        artistMV: "Hoài Lâm"
    },
]



export default class Mv extends Component {
        constructor(props) {
            super(props);
            this.state = {
                visible : true,
                titleScreen: 'MV'
            }
        }
        renderListMV(item) {
            const {navigate} = this.props.navigation;
            return(
                <TouchableOpacity style = {{justifyContent: "center", marginBottom: 15}}
                    onPress = {() => navigate("MVNowPlay")}>
                    <Image source = {item.images} style = {styles.imageListMVItem}></Image>
                    <Text style = {styles.titleMV}>{item.titleMV}</Text>
                    <Text style = {styles.artistMV}>{item.artistMV}</Text>
                </TouchableOpacity>
            )
        }
        
        render() {
            return (
                <ImageBackground source={config.BG} style = {styles.container}>
                    <View style = {styles.topBar}>
                    <TouchableOpacity style = {styles.topBarImages}>
                            <Image source = {require('../../images/user.png')} style={{width: 40, height: 40}}></Image>
                    </TouchableOpacity>
                    <TextInput 
                            style = {styles.topBarInput}
                            placeholder = "Tìm kiếm"
                            placeholderTextColor = "#a3a6ae">
                    </TextInput>
                    </View>
                    <ScrollView showsVerticalScrollIndicator = {false}>
                        <View style = {styles.containerListMV}>
                            <Text style = {styles.listMVTitle}>MV HOT</Text>
                            <FlatList
                                data = {listMV}
                                renderItem = {({item,index}) => this.renderListMV(item)}
                                keyExtractor={item=>item.id}
                                showsVerticalScrollIndicator = {false}
                            />
                        </View>
                    </ScrollView>
                </ImageBackground>
            )
    }
}
