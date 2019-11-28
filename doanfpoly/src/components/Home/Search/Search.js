import React, { Component } from 'react'
import { Text, StyleSheet, View, BackHandler,Image, TextInput, ImageBackground,ScrollView,FlatList,TouchableOpacity, StatusBar } from 'react-native';
import CONFIG from '../../../config/custom';
import  SERVICES from '../../../services/index';

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataSearch: this.props.data,

        }
    }

    searchFilterFunction = (text) => {    
        const newData = this.arrayHolder.filter(item => {      
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });
        this.setState({ dataSearch: newData });  
    };

    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={this.state.dataSearch}
                    renderItem={({item,index})=>this.renderSuggest(item)}
                    keyExtractor={item=>item.id}
                    scrollEnabled={false}
                /> 
            </View>
        )
    }
}
