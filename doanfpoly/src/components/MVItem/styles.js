import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 0
    },
    backgroundVideo: {
        // width: '100%',
        // height:"100%",
        backgroundColor: 'black',
        borderWidth:1,
        borderColor:'red',
        position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignSelf: 'center',

    },
    toolbar: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    containerItemVideo: {
        width: width,
        height: 250,
        borderWidth:1
    }
})

export default styles;