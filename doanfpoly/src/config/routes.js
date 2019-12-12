/**
 ** ROUTES ON SERVER
 **/

export default{

    // API DATA MP3
    API_GET_MP3: { method: 'GET', url: '/view.php' },

    API_GET_MP4: { method: 'GET', url: '/view_mp4.php' },
    
    API_LOGIN: { method: 'POST', url: '/login_client.php'},

    API_REGISTER: { method: 'POST', url: '/add_user.php'},

    API_ADD_PLAYLIST: { method: 'POST', url: '/create_playlist.php'},

    API_VIEW_PLAYLIST: { method: 'POST', url: '/view_playlist.php'},

    API_ADD_MP3_PLAYLIST: { method: 'POST', url: '/add_mp3_playlist.php'},

    API_VIEW_DETAIL_PLAYLIST: { method: 'POST', url: '/view_playlist_detail.php'},

    API_UPDATE_VIEW_MP3: { method: 'POST', url: '/update_view_mp3.php'},

    API_GET_SINGER: { method: 'GET', url: '/view_singer.php'},
    
    API_VIEW_MP3_SINGER: { method: 'POST', url: '/view_mp3_singer.php'},

    API_VIEW_APP_PLAYLIST: { method: 'GET', url: '/view_custom_playlist.php'},

    API_VIEW_APP_PLAYLIST_DETAILS: { method: 'POST', url: '/view_custom_details.php'},
}