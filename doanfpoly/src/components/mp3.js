import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import Sound from 'react-native-sound';
import CONFIG from '../config/custom'
// const sound = new Sound(require('../images/anhgioi.mp3'), null,(error)=>{
//     if(error){
//         console.log(error)
//     }
// })

export default class mp3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            // data:props.navigation.state.params.item.path
        }
    }
    playmp3(){

        sound.play();
    }
    componentDidMount(){
        const link='https://data.chiasenhac.com/downloads/2044/2/2043333-3adcc678/128/Loi%20Nho%20-%20Den_%20Phuong%20Anh%20Dao.mp3';
        const sound = new Sound(link, null,(error)=>{
            if(error){
                console.log(error)
            }
            console.log('http://172.20.10.3/'+this.state.data);
            sound.play();
        })
        // const sound = new Sound(link,
        // undefined,
        // error => {
        //   if (error) {
        //     console.log(error)
        //   } else {
        //     console.log("Playing sound");
        //     sound.play(() => {
        //       // Release when it's done so we're not using up resources
        //       sound.release();
        //     });
        //   }
        // });
    }
    
    stopmp3(){
        sound.stop()
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <TouchableOpacity onPress={()=>this.playmp3()}><Text>Play</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.stopmp3()}><Text>Stop</Text></TouchableOpacity>
            </View>
        )
    }
}
