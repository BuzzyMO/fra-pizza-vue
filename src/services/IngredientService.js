import axios from 'axios';

const INGREDIENT_API_BASE_URL = 'http://localhost:8080/api/ingredients/';
const config = {
    withCredentials: true,
    crossDomain: true,
}

class IngredientService {

    getIngredients() {
        return axios.get(INGREDIENT_API_BASE_URL, config);
    }

    createIngredient(ingredient) {
        return axios.post(INGREDIENT_API_BASE_URL, ingredient, config);
    }

    updateIngredient(id, ingredient) {
        return axios.put(INGREDIENT_API_BASE_URL + id, ingredient, config);
    }

    deleteIngredient(id) {
        return axios.delete(INGREDIENT_API_BASE_URL + id, config);
    }
}

export default new IngredientService();