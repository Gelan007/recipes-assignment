import {Recipe} from "../../interfaces/recipes";

export const getIngredientInfoWithMeasurements = (recipe: Recipe): string[] => {
    if(recipe?.strIngredients) {
        return recipe?.strIngredients.map((ingredient,i) => {
            return `${ingredient}(${recipe?.strMeasures[i].trim()})`;
        })
    }
    return [];
}

export const getAllIngredientsInfoWithMeasurements = (recipes: Recipe[]): string[] => {
    let allIngredients: string[] = recipes.flatMap(recipe => getIngredientInfoWithMeasurements(recipe));
    allIngredients.sort((a, b) => a.localeCompare(b));

    return allIngredients;
}