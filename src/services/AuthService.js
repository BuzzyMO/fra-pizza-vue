import axios from 'axios';

const AUTH_API_BASE_URL = 'http://localhost:8080/api/auth/';

class AuthService {

    headAuth(credentials) {
        var authorizationString = credentials.email + ":" + credentials.password;
        var encodedAuthorization = Buffer.from(authorizationString).toString('base64');
        var config = {
            headers: { 'Authorization': "Basic " + encodedAuthorization }
        }

        return axios.head(AUTH_API_BASE_URL, config);
    }
}

export default new AuthService();