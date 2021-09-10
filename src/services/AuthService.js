import axios from 'axios';

const AUTH_API_BASE_URL = 'http://localhost:8080/api/auth/';

class AuthService {

    login(credentials) {
        var authorizationString = credentials.email + ":" + credentials.password;
        var encodedAuthorization = Buffer.from(authorizationString).toString('base64');
        var config = {
            crossDomain: true,
            withCredentials: true,
            headers: { 'Authorization': "Basic " + encodedAuthorization }
        }
        console.log(config);
        return axios.post(AUTH_API_BASE_URL, {}, config)
            .then((response) => {
                console.log(response.status);
                // console.log(JSON.parse(localStorage.getItem('user')))
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
}

export default new AuthService();