import React, {useEffect} from 'react';
import RecipeInfo from "./RecipeInfo";
import {useParams} from "react-router-dom";
import {AppRootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Recipe} from "../../interfaces/recipes";
import {getRecipeById, getRecipes, setCurrentRecipe} from "../../redux/slices/recipes-slice";
import {getIngredientInfoWithMeasurements} from "../../utils/recipes/ingredients";
import { TailSpin } from 'react-loader-spinner'
import recipes from "../recipes/Recipes";

type MapStatePropsType = {
    currentRecipe: Recipe | null;
    recipes: Recipe[]
}
type MapDispatchPropsType = {
    getRecipeById: (payload: {id: string}) => void;
    setCurrentRecipe: (recipe: Recipe | null) => void;
    getRecipes: () => void;
}
type RecipesContainerProps = MapStatePropsType & MapDispatchPropsType;

const RecipeInfoContainer: React.FC<RecipesContainerProps> = (props) => {
    const {recipeId} = useParams();

    useEffect(() => {
        props.getRecipeById({id: recipeId!})
        props.getRecipes()

        return () => props.setCurrentRecipe(null)
    }, []);

    const handlePageClick = (pageNumber: number) => {
        props.recipes.forEach((recipe, index) => {
            if(index === pageNumber) {
                props.setCurrentRecipe(recipe)
            }
        })
    }

    return (
        <>
            {
                props.currentRecipe && props.recipes ?
                    <RecipeInfo recipe={props.currentRecipe}
                                recipes={props.recipes}
                                formattedIngredients={getIngredientInfoWithMeasurements(props.currentRecipe)}
                                handlePageClick={handlePageClick}
                    />
                    :
                    <TailSpin
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="three-dots-loading"
                    />
            }
        </>
    );
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    currentRecipe: state.recipes.currentRecipe,
    recipes: state.recipes.recipes
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {setCurrentRecipe, getRecipeById, getRecipes}
)(RecipeInfoContainer);
