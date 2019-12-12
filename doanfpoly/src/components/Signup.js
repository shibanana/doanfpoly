import React, { Component } from 'react'
import { Text, View,Image,ImageBackground,StyleSheet,TouchableOpacity,TextInput  } from 'react-native';
import CONFIG from '../config/custom';
import SERVICES from '../services/index';

export default class Signup extends Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            username: '',
            password:'',
            repassword:'',
            validateUserName: false,
            validatePassword: false,
            compare: false,
        };
      }
      login(){
        this.props.navigation.navigate('Login')
    }

    register = async () => {
        if(this.state.username.length<6){
            this.setState({
                validateUserName: true
            })
        }else{
            if(this.state.password.length<6){
                this.setState({
                    validatePassword: true,
                    validateUserName: false,
                })
            }else{
                if(this.state.password != this.state.repassword){
                    this.setState({
                        compare: true,
                        validatePassword: false
                    })
                }else{
                    this.setState({
                        compare:false
                    });
                    const {name, username, password} = this.state;
                    let response = await SERVICES.register(name, username, password);
                    if( response[0].status == 200 ) {
                        this.props.navigation.navigate('Login');
                    }else {
                        console.log('ko co gi')
                    }
                }
            }
        }

    }
    render() {
        return (
            <ImageBackground source={require('../images/background.png')} style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <TouchableOpacity 
                            style={styles.headerLogin}
                            onPress={() => this.login()}
                        >
                            <Text style={styles.headerLoginText}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerSignup}>
                            <Text style={styles.headerSignupText}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Name"
                            onChangeText={(text) => this.setState({name: text})}
                            value={this.state.name}
                            placeholderTextColor="#404b69"
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                            onChangeText={(text) => this.setState({username: text})}
                            value={this.state.username}
                            placeholderTextColor="#404b69"
                        />
                        {this.state.validateUserName ? (
                            <Text style={styles.validateText}>*Tên đăng nhập phải trên 6 ký tự</Text>
                        ) : null}
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}
                            placeholderTextColor="#404b69"
                        />
                        {this.state.validatePassword ? (
                            <Text style={styles.validateText}>*Mật khẩu phải trên 6 ký tự</Text>
                        ) : null}
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            placeholder="Re-type Password"
                            onChangeText={(text) => this.setState({repassword: text})}
                            value={this.state.repassword}
                            placeholderTextColor="#404b69"
                        />
                        {this.state.compare ? (
                            <Text style={styles.validateText}>*Mật khẩu không trùng</Text>
                        ) : null}
                    </View>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={() => this.register()}
                    >
                        <Text style={styles.buttonLoginText}>Đăng Ký</Text>
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
    headerSignup:{
        borderBottomColor:'#3ea512',
       borderBottomWidth:4,
       paddingLeft:5,
       paddingRight:5
    },
    headerSignupText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
        padding:10,
    },
    headerLogin:{
        borderBottomColor:'#404b69',
       borderBottomWidth:4,
       
    },
    headerLoginText:{
        color:'#404b69',
        fontWeight:'bold',
        fontSize:18,
        padding:10,
    },
    input:{
        marginBottom:20,
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
    },
    validateText:{
        marginLeft: 10,
        color: 'red'
    }
})
