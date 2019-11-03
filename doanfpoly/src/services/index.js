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
            return responseJson;
        } catch (err) {
            return null
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
}