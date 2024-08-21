import axios from "axios";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/"

export const recipesAPI = {
    async getRecipes() {
        const response = await axios.get(`${baseUrl}search.php?s`)

        return response;
    },
    async getRecipeById(id: string) {
        const response = await axios.get(`${baseUrl}lookup.php?i=${id}`)

        return response;
    },
}