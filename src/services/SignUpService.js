import axios from 'axios';

const SIGN_UP_API_BASE_URL = 'http://localhost:8080/api/users/';

class SignUpService{

    postUser(data){
        return axios.post(SIGN_UP_API_BASE_URL, data)
          .then((response) => {
            console.log(response.status);
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

export default new SignUpService();