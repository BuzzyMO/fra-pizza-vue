import axios from 'axios';

const PIZZERIAS_API_BASE_URL = 'http://localhost:8080/api/pizzerias/';
const config = {
    withCredentials: true,
    crossDomain: true,
}

class PizzeriaService {

    getPizzerias() {
        return axios.get(PIZZERIAS_API_BASE_URL, config);
    }

    createPizzeria(data) {
        return axios.post(PIZZERIAS_API_BASE_URL, data, config);
    }

    updatePizzeria(id, pizzeria) {
        return axios.put(PIZZERIAS_API_BASE_URL + id, pizzeria, config);
    }

    deletePizzeria(id) {
        return axios.delete(PIZZERIAS_API_BASE_URL + id, config);
    }
}

export default new PizzeriaService();