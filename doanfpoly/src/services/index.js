import CONFIG from '../config/custom';
import ROUTES from '../config/routes';

export default {
    getMP3: async () => {
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_GET_MP3.url, {
                method: ROUTES.API_GET_MP3.method,
                headers: CONFIG.API.HEADER,
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (err) {
            return null
        }
    },

    login: async (username, password) => {
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_LOGIN.URL, {
                method: ROUTES.API_LOGIN.method,
                headers: CONFIG.API.HEADER,
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            let responseJson = await response.json;
            
        } catch (err) {
            return null
        }
    }
}