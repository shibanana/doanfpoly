import CONFIG from '../config/custom';
import ROUTES from '../config/routes';

// CONVERT DATA TO X-FORM
const encodeFormData = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

export default {

    getMP3: async () => {
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_GET_MP3.url, {
                method: ROUTES.API_GET_MP3.method,
                headers: CONFIG.API.HEADER,
            });
            let responseJson = await response.json();
            console.log(responseJson)
            return responseJson;
        } catch (err) {
            console.log(err)
        }
    },

    getMP4: async () => {
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_GET_MP4.url, {
                method: ROUTES.API_GET_MP4.method,
                headers: CONFIG.API.HEADER,
            });

            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } catch(err) {
            console.log(err)
        }
    },

    getSinger: async () => {
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_GET_SINGER.url, {
                method: ROUTES.API_GET_SINGER.method,
                headers: CONFIG.API.HEADER,
            });
            let responseJson = await response.json();
            console.log(responseJson)
            return responseJson;
        } catch (err) {
            console.log(err)
        }
    },

    login: async (username, password) => {
        let formData = {username: username, password:password};
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_LOGIN.url, {
                method: ROUTES.API_LOGIN.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            console.log(responseJson);
            CONFIG.dataUser = responseJson;
            return responseJson;
        } catch (err) {
            console.log(err);
        }
    },

    
    register: async (name, username, password) => {
        let formData = {name: name, username: username, password:password};
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_REGISTER.url, {
                method: ROUTES.API_REGISTER.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (err) {
            console.log(err);
        }
    },

    addPlaylist: async (name, userID) => {
        let users_id = parseInt(userID, 10)
        let formData = {playlist_name: name, users_id: users_id};
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_ADD_PLAYLIST.url, {
                method: ROUTES.API_ADD_PLAYLIST.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            console.log(responseJson);
            console.log(users_id);
            return responseJson[0];
        } catch (err) {
            console.log(err);
        }
    },

    viewPlaylist: async (userID) => {
        let users_id = parseInt(userID, 10)
        let formData = {users_id: users_id};
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_VIEW_PLAYLIST.url, {
                method: ROUTES.API_VIEW_PLAYLIST.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } catch (err) {
            console.log(err);
        }
    },

    addMp3Playlist: async (mp3_id, playlist_id) => {
        let mp3_id_convert = parseInt(mp3_id, 10);
        let playlist_id_convert = parseInt(playlist_id, 10);
        let formData = {mp3_id: mp3_id_convert, playlist_id: playlist_id_convert};
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_ADD_MP3_PLAYLIST.url, {
                method: ROUTES.API_ADD_MP3_PLAYLIST.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            console.log(responseJson[0]);
            return responseJson[0];
        } catch (err) {
            console.log(err);
        }
    },

    viewDetailPlaylist: async (playlist_id) => {
        let playlist_id_convert = parseInt(playlist_id, 10);
        let formData = {playlist_id: playlist_id_convert};
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_VIEW_DETAIL_PLAYLIST.url, {
                method: ROUTES.API_VIEW_DETAIL_PLAYLIST.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson
        } catch (err) {
            console.log(err);
        }
    },

    updateViewMp3 : async (mp3_id) => {
        let mp3_id_convert = parseInt(mp3_id, 10);
        let formData = {mp3_id: mp3_id_convert};
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_UPDATE_VIEW_MP3.url, {
                method: ROUTES.API_UPDATE_VIEW_MP3.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } catch (err) {
            console.log(err);
        }
    },

    viewMp3Singer: async (singer) => {
        let formData = {singer: singer};
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_VIEW_MP3_SINGER.url, {
                method: ROUTES.API_VIEW_MP3_SINGER.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson
        } catch (err) {
            console.log(err);
        }
    },

    getAppPlaylist: async () => {
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_VIEW_APP_PLAYLIST.url, {
                method: ROUTES.API_VIEW_APP_PLAYLIST.method,
                headers: CONFIG.API.HEADER,
            });
            let responseJson = await response.json();
            console.log(responseJson)
            return responseJson;
        } catch (err) {
            console.log(err)
        }
    },

    viewAppPlaylistDetail : async (custom_playlist_id) => {
        let custom_playlist_id_convert = parseInt(custom_playlist_id, 10);
        let formData = {custom_playlist_id: custom_playlist_id_convert};
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_VIEW_APP_PLAYLIST_DETAILS.url, {
                method: ROUTES.API_VIEW_APP_PLAYLIST_DETAILS.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } catch (err) {
            console.log(err);
        }
    },
}