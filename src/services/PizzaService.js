import axios from 'axios';

const PIZZA_API_BASE_URL = 'http://localhost:8080/api/pizzas/authority/1';

class PizzaService{

    getPizzas(){
        return axios.get(PIZZA_API_BASE_URL);
    }
}

export default new PizzaService();