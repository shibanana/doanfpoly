/**
 ** ROUTES ON SERVER
 **/

export default{

    // API DATA MP3
    API_GET_MP3: { method: 'GET', url: '/view.php' },
    
    API_LOGIN: { method: 'POST', url: '/login_client.php'},

    API_REGISTER: { method: 'POST', url: '/add_user.php'},

    API_ADD_PLAYLIST: { method: 'POST', url: '/create_playlist.php'},

    API_VIEW_PLAYLIST: { method: 'POST', url: '/view_playlist.php'},

    API_ADD_MP3_PLAYLIST: { method: 'POST', url: '/add_mp3_playlist.php'},

    API_VIEW_DETAIL_PLAYLIST: { method: 'POST', url: 'view_playlist_detail.php'},
}