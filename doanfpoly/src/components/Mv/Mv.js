import React, { Component } from 'react'
import { Text, View, TouchableOpacity,BackHandler, ImageBackground , Image} from 'react-native'
import MVNowPlay from '../MVItem/MVNowPlay';
import config from '../../config/custom';
import SERVICES from '../../services/index'
import styles from './styles'
import Icon from 'react-native-vector-icons'
import { TextInput, ScrollView, FlatList } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Mv extends Component {
        constructor(props) {
            super(props);
            this.state = {
                visible : true,
                titleScreen: 'MV',
                data: config.dataMp4,
                isLoading: false
            }
            this.arrayHolder=[]
        }

        componentDidMount() {
            console.log(this.state.data);
        }

        renderListMV(item) {
            
            const path = config.API.URL_GET_ITEM + item.path;
            const name = item.name;
            const singer = item.singer;
            const images = config.API.URL_GET_ITEM + item.picture;
            return(
                <TouchableOpacity style = {{justifyContent: "center", marginBottom: 15}}
                    onPress = {(item) => this.props.navigation.navigate("MVNowPlay", {path, name, singer})}>
                    <Image source = {{uri: images}} style = {styles.imageListMVItem}></Image>
                    <Text style = {styles.titleMV}>{item.name}</Text>
                    <Text style = {styles.artistMV}>{item.singer}</Text>
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
                                data = {this.state.data}
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
