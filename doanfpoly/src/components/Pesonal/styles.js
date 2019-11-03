import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        justifyContent: 'flex-start',
        backgroundColor: '#283149',
    },
    headerText: {
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 18
    },
    user: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#1a2238',
    },
    userAvatar: {
        width: 50,
        height: 50,
    },
    userName: {
        color: '#a3a6ae'
    },
    userInfoName: {
        color: '#fff'
    },
    userInfo: {
        alignSelf: 'center',
        paddingLeft: 15
    },
    library: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    libraryItem: {
        flexDirection: 'row',
        padding: 10,
    },
    libraryItemLogout: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 0.4,
        borderTopColor: 'gray',
    },
    libraryTitle: {
        fontSize: 18,
        color: '#fff',
    },
    libraryIcon: {
        width: 25,
        height: 25,
        alignSelf: 'center',
    },
    nextArrowIcon: {
        width: 15,
        height: 15,
        alignSelf: 'center',
        alignItems:'center'
    },
    libraryText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 16,
        paddingLeft: 15,
        flex: 8,
    },

}); 

export default styles;