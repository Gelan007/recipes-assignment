import {RECIPE_ROUTE, RECIPES_ROUTE, SELECTED_RECIPES_ROUTE} from "./constants";
import RecipesContainer from "../../components/recipes/RecipesContainer";
import RecipeInfoContainer from "../../components/recipeInfo/RecipeInfoContainer";
import SelectedRecipesContainer from "../../components/selectedRecipes/SelectedRecipesContainer";


export const publicRoutes = [
    {
        path: RECIPES_ROUTE,
        Component: RecipesContainer
    },
    {
        path: RECIPE_ROUTE,
        Component: RecipeInfoContainer
    },
    {
        path: SELECTED_RECIPES_ROUTE,
        Component: SelectedRecipesContainer
    }
]
