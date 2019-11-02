import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    topBar:{
        flexDirection:'row',
        height:50,
        marginTop:15,
    },
    topBarImages:{
        flex:1,
        marginBottom:5,
        marginTop:5,
        alignItems:'center',
        marginRight:10,  
        paddingLeft:10, 
    },
    topBarInput:{
        flex:9,
        borderRadius:25,
        backgroundColor:'#404b69',
        alignItems:'center',  
        margin:5,
        fontSize:16,
        paddingLeft:15,
        color:'#fff',
    },
    listMVTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10
    },  
    toolbar: {
        marginTop: 5,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    containerItemVideo: {
        width: width,
        height: 200,
    },
    imageListMVItem: {
        width: "100%",
        height: 200,
        borderRadius: 5
    },
    titleMV: {
        marginTop: 5,
        width: 150,
        color: "#fff",
        fontWeight: "bold"
    },
    artistMV: {
        color: "#fff",
        opacity: .5,
        fontWeight: "bold"
    }
})

export default styles;