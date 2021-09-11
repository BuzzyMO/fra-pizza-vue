import axios from 'axios';

const INGREDIENT_API_BASE_URL = 'http://localhost:8080/api/ingredients';

class IngredientService {

    getIngredients() {
        var config = {
            withCredentials: true,
        }

        return axios.get(INGREDIENT_API_BASE_URL, config);
    }
}

export default new IngredientService();