import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/';

class AuthService {

    login(credentials) {
        var authorizationString = credentials.email + ":" + credentials.password;
        var encodedAuthorization = Buffer.from(authorizationString).toString('base64');
        var config = {
            crossDomain: true,
            withCredentials: true,
            headers: { 'Authorization': "Basic " + encodedAuthorization }
        }
        return axios.post(API_BASE_URL + 'auth', {}, config)
            .then((response) => {
                console.log(response.status);
                console.log(response);
                localStorage.setItem('user', JSON.stringify(credentials.email));
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }

    logout() {
        var config = {
            withCredentials: true,
        }
        return axios.delete(API_BASE_URL + 'auth', config)
            .then((response) => {
                console.log(response.status);
                console.log(response);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }

    readUserAuthorities() {
        return axios.get(API_BASE_URL + 'users/authorities', { withCredentials: true });
    }
}

export default new AuthService();