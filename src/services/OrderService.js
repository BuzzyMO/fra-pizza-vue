import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/';
const config = {
  withCredentials: true,
}

class OrderService {

  createOrder(order) {

    return axios.post(API_BASE_URL + 'orders', order, config)
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

  readUserOrders() {
    return axios.get(API_BASE_URL + 'users/orders', config);
  }
}

export default new OrderService();