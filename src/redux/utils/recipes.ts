import { Recipe } from "../../interfaces/recipes";

export const getTransformedRecipes = (recipes: any[]): Recipe[] => {
    return recipes.map(recipe => {
        const ingredients: string[] = [];
        const measures: string[] = [];

        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];

            if (ingredient && ingredient.trim()) ingredients.push(ingredient);
            if (measure && measure.trim()) measures.push(measure);
        }

        return {
            idMeal: recipe.idMeal,
            strMeal: recipe.strMeal,
            strCategory: recipe.strCategory,
            strArea: recipe.strArea,
            strInstructions: recipe.strInstructions,
            strMealThumb: recipe.strMealThumb,
            strTags: recipe.strTags,
            strYoutube: recipe.strYoutube,
            strSource: recipe.strSource,
            strIngredients: ingredients,
            strMeasures: measures,
        };
    });
};
