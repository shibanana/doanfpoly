import React, { Component } from 'react'
import { Text, View,Image,ImageBackground,StyleSheet,TouchableOpacity,TextInput  } from 'react-native';
import SERVICES from '../services/index';
import RootToast from './RootToast/index';
export default class Login extends Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
        };
      }
     
    SignUp(){
        this.props.navigation.navigate('Signup')
    }
    Login = async () => {
        const {username, password} = this.state;
        let response = await SERVICES.login(username, password);
        if (response[0].status == 200) {
            this.props.navigation.navigate('Home')
        }else {
            console.log('deo co gi')
        }
    }

    render() {
        return (
            <ImageBackground source={require('../images/background.png')} style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerLogin}>
                            <Text style={styles.headerLoginText}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.headerSignup}
                            onPress={() => this.SignUp()}
                        >
                            <Text style={styles.headerSignupText}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="name@gmail.com"
                            onChangeText={(text) => this.setState({username: text})}
                            value={this.state.username}
                            placeholderTextColor="#404b69"
                        />
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}
                            placeholderTextColor="#404b69"
                        />
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={() => this.Login()}
                    >
                        <Text style={styles.buttonLoginText}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <Text style={{color:"#fff", fontSize:16, marginTop:20,marginBottom:20}}>or</Text>
                    <View style={styles.anotherLogin}>
                        <TouchableOpacity style={styles.loginFacebook}>
                            <View style={{padding:15, flexDirection:'row'}}>
                                <Image style={styles.facebookLogo} source={require('../images/facebook.png')}></Image>
                                <Text style={styles.facebookText}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginTwitter}>
                            <View style={{padding:15, flexDirection:'row'}}>
                                <Image style={styles.twitterLogo} source={require('../images/twitter.png')}></Image>
                                <Text style={styles.twitterText}>Twitter</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        flexDirection:'row',
        marginBottom:40,
    },
    headerLogin:{
        borderBottomColor:'#3ea512',
       borderBottomWidth:4,
    },
    headerLoginText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
        padding:10,
    },
    headerSignup:{
        borderBottomColor:'#404b69',
       borderBottomWidth:4,
       paddingLeft:5,
       paddingRight:5
    },
    headerSignupText:{
        color:'#404b69',
        fontWeight:'bold',
        fontSize:18,
        padding:10,
    },
    input:{
        marginBottom:70,
        marginLeft:15,
        marginRight:5
    },
    textInput:{
        color:'#fff',
        width:350,
        borderWidth:1.5,
        borderColor:'#404b69',
        borderRadius:5,
        margin:10,        
    },
    buttonLogin:{
        backgroundColor:'#3ea512',
        width:'90%',
        borderRadius:25,
        marginTop:20
    },
    buttonLoginText:{
        color:'#fff',
        padding:13,
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center'
    },
    anotherLogin:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    loginFacebook:{
        borderWidth:1,
        borderColor:'#404b69',
        width:150,
        borderRadius:25,
        marginRight:10
    },
    facebookText:{
        color:'#fff',
        fontSize:18,
    },
    facebookLogo:{
        marginRight:10
    },
    loginTwitter:{
        borderWidth:1,
        borderColor:'#404b69',
        width:150,
        borderRadius:25,
        marginLeft:10
    },
    twitterText:{
        flex:7,
        color:'#fff',
        fontSize:18,
        
    },
    twitterLogo:{
       marginRight:10
    },
    forgotPass:{
        color:'#3ea512',
        textAlign:'right',
        marginBottom:20,
        marginLeft:'65%'
    }
})
