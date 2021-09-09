import axios from 'axios';

const SIGN_UP_API_BASE_URL = 'http://localhost:8080/api/users/';

class SignUpService{

    postUser(data){
        return axios.post(SIGN_UP_API_BASE_URL, data);
    }
}

export default new SignUpService();