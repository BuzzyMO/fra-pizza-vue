import axios from 'axios';

const PIZZA_API_BASE_URL = 'http://localhost:8080/api/pizzas/';
const config = {
    withCredentials: true,
}

class PizzaService {

    getPizzas() {
        return axios.get(PIZZA_API_BASE_URL + 'authority/1');
    }

    getCustomPizzas() {
        return axios.get(PIZZA_API_BASE_URL + 'user', config);
    }

    createPizza(data) {
        return axios.post(PIZZA_API_BASE_URL, data, config);
    }
}

export default new PizzaService();