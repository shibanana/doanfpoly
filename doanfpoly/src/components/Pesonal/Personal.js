import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import CONFIG from '../../config/custom';
export default class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: CONFIG.dataUser,
        }
    }


    render() {
        return (
            <View>
            <TouchableOpacity
                onPress = { () => console.log(this.state.data)}
            >
                <Text> click </Text>    
            </TouchableOpacity>

            </View>
        )
    }
}
