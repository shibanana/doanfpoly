import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import Sound from 'react-native-sound'
const sound = new Sound(require('../images/aaa.mp3'), null,(error)=>{
    if(error){
        console.log(error)
    }
    sound.play()
})

export default class mp3 extends Component {
    playmp3(){
        
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <TouchableOpacity onPress={()=>this.playmp3()}><Text>Play</Text></TouchableOpacity>
            </View>
        )
    }
}
