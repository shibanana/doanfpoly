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

    // login: async (username, password) => {
    //     try {
    //         let response = await fetch(CONFIG.API.URL+ROUTES.API_LOGIN.URL, {
    //             method: ROUTES.API_LOGIN.method,
    //             headers: CONFIG.API.HEADER,
    //             body: JSON.stringify({
    //                 username: username,
    //                 password: password
    //             })
    //         });
    //         let responseJson = await response.json;
            
    //     } catch (err) {
    //         return null
    //     }
    // },

    
    register: async (name, username, password) => {
        let formData = {name: name, username: username, password:password};
        const encodeFormData = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&');
        }
        try {
            let response = await fetch(CONFIG.API.URL+ROUTES.API_REGISTER.url, {
                method: ROUTES.API_REGISTER.method,
                headers: CONFIG.API.HEADER,
                body: encodeFormData(formData),
            });
            let responseJson = await response.json();
            console.log(responseJson[0].status)
            return responseJson;
        } catch (err) {
            console.log(err);
        }
    },
}