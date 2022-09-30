import axios from 'axios'


const RECIPE_BASE_REST_API_URL = 'http://localhost:8080/custom/api/recipes';

class RecipeService{

    getAllRecipes(){
        return axios.get(RECIPE_BASE_REST_API_URL)
    }   

    createRecipe(recipe){
        return axios.post(RECIPE_BASE_REST_API_URL, recipe)
    }

    getRecipeById(recipeId){
        return axios.get(RECIPE_BASE_REST_API_URL + '/' + recipeId);
    }
}

export default new RecipeService();