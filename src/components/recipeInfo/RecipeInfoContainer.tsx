import React, {useEffect} from 'react';
import RecipeInfo from "./RecipeInfo";
import {useParams} from "react-router-dom";
import {AppRootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Recipe} from "../../interfaces/recipes";
import {getRecipeById, setCurrentRecipe} from "../../redux/slices/recipes-slice";
import {getIngredientInfoWithMeasurements} from "../../utils/recipes/ingredients";
import { TailSpin } from 'react-loader-spinner'

type MapStatePropsType = {
    currentRecipe: Recipe | null;
}
type MapDispatchPropsType = {
    getRecipeById: (payload: {id: string}) => void;
    setCurrentRecipe: (recipe: Recipe | null) => void;
}
type RecipesContainerProps = MapStatePropsType & MapDispatchPropsType;

const RecipeInfoContainer: React.FC<RecipesContainerProps> = (props) => {
    const {recipeId} = useParams();

    useEffect(() => {
        props.getRecipeById({id: recipeId!})

        return () => props.setCurrentRecipe(null)
    }, []);


    return (
        <>
            {
                props.currentRecipe ?
                    <RecipeInfo recipe={props.currentRecipe}
                                formattedIngredients={getIngredientInfoWithMeasurements(props.currentRecipe)}
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
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {setCurrentRecipe, getRecipeById}
)(RecipeInfoContainer);
