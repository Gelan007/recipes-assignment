import React, {useEffect} from 'react';
import RecipeInfo from "./RecipeInfo";
import {useParams} from "react-router-dom";
import {AppRootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Recipe} from "../../interfaces/recipes";
import {getRecipeById} from "../../redux/slices/recipes-slice";

type MapStatePropsType = {
    currentRecipe: Recipe | null;
}
type MapDispatchPropsType = {
    getRecipeById: (payload: {id: string}) => void;
}
type RecipesContainerProps = MapStatePropsType & MapDispatchPropsType;

const RecipeInfoContainer: React.FC<RecipesContainerProps> = (props) => {
    const {recipeId} = useParams();

    useEffect(() => {
        props.getRecipeById({id: recipeId!})
    }, []);

    return (
        <RecipeInfo recipe={props.currentRecipe}/>
    );
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    currentRecipe: state.recipes.currentRecipe,
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {getRecipeById}
)(RecipeInfoContainer);
