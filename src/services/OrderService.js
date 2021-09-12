import axios from 'axios';

const ORDER_API_BASE_URL = 'http://localhost:8080/api/orders';

class OrderService {

    createOrder(order) {
        var config = {
            withCredentials: true,
        }

        return axios.post(ORDER_API_BASE_URL, order, config);
    }
}

export default new OrderService();