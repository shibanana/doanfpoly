import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Toast from 'react-native-root-toast';

export default class RootToast extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible: true,
        }
    }

    componentDidMount = () => {
        // setTimeout(() => this.setState({
        //     visible: true
        // }), 200); // show toast after 0.2s
        setTimeout(() => this.setState({
            visible: false
        }), 2000); // hide toast after 3s
    };
    
    render() {
        const {message} = this.props
        return <Toast
            visible={this.state.visible}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >{message}</Toast>;
    }
}
