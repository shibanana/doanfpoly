import React, { Component } from 'react'
import { Text, View,Image,ImageBackground,StyleSheet,TouchableOpacity } from 'react-native'


export default class MainLogin extends Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    login(){
        this.props.navigation.navigate('Login')
    }
    singup(){
        this.props.navigation.navigate('Signup')
    }
    render() {
        return (
            <ImageBackground  source={require('../images/background.png')} style={styles.container}>
                <View style={styles.main}>
                    <Image style={styles.imageLogin} source={require('../images/login.png')}></Image>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={() => this.login()}
                    >
                        <Text style={styles.buttonLoginText}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonSignup}
                        onPress={() => this.singup()}
                    >
                        <Text style={styles.buttonSignupText}>Đăng ký</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.term}
                    >
                        <Text  style={styles.termText}>Terms and services</Text>
                    </TouchableOpacity>
                </View>   
            </ImageBackground>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:20,
        paddingRight:20,
    },
    main:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:40
    },
    imageLogin:{
        width:200,
        height:200,
        borderRadius:200/2,
        marginBottom:50
    },
    buttonLogin:{
        backgroundColor:'rgba(52, 52, 52, 0.0)',
        width:'90%',
        borderRadius:25,
        borderColor:'#fff',
        borderWidth:0.2,
        marginTop:20
    },
    buttonLoginText:{
        color:'#3ea512',
        padding:13,
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center'
    },
    buttonSignup:{
        backgroundColor:'#3ea512',
        width:'90%',
        borderRadius:25,
        marginTop:20
    },
    buttonSignupText:{
        color:'#fff',
        padding:13,
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center'
    },
    term:{
        marginTop:40
    },
    termText:{
        color:'#3ea512',
    }
})
