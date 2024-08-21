import {HOME_ROUTE, RECIPE_ROUTE, RECIPES_ROUTE, SELECTED_RECIPES_ROUTE} from "./constants";
import RecipesContainer from "../../components/recipes/RecipesContainer";
import RecipeInfoContainer from "../../components/recipeInfo/RecipeInfoContainer";
import SelectedRecipesContainer from "../../components/selectedRecipes/SelectedRecipesContainer";
import Home from "../../pages/home/Home";


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
    },
    {
        path: HOME_ROUTE,
        Component: Home
    }
]
