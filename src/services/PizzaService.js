import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/';
const config = {
    withCredentials: true,
    crossDomain: true,
}

class PizzaService {

    getPizzas() {
        return axios.get(API_BASE_URL + 'authorities/1/pizzas');
    }

    getCustomPizzas() {
        return axios.get(API_BASE_URL + 'users/pizzas', config);
    }

    createPizza(data) {
        return axios.post(API_BASE_URL + 'pizzas', data, config);
    }
}

export default new PizzaService();