import { StyleSheet, Dimensions } from 'react-native';
// const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 0
    },
    infoContainer: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    styleName: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    styleSinger: {
        color: '#fff',
        fontWeight:'bold',
        fontSize: 18,
        opacity: .6
    },
    suggestList:{
        flexDirection:'row',
        marginLeft:10,
        marginTop:10,
    },
    suggestImage:{
        width:100,
        height:65,
    },
    suggestText:{
        marginLeft:10
    },
    suggestTextTitle:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'  
    },
    suggestTextSinger:{
        color:'#a3a6ae',
        fontSize:14
    }
  
})

export default styles;