import React, {useEffect} from 'react';
import Recipes from "./Recipes";
import {Recipe} from "../../interfaces/recipes";
import {AppRootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {getRecipes} from "../../redux/slices/recipes-slice";

type MapStatePropsType = {
    recipes: Recipe[]
    /*totalPagesCount: number
    currentPage: number*/
}
type MapDispatchPropsType = {
    getRecipes: () => void
}
type OwnPropsType = {}
type RecipesContainerProps = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const RecipesContainer:React.FC<RecipesContainerProps> = (props) => {
    useEffect(() => {
        props.getRecipes();
    }, []);

    return (
        <Recipes/>
    );
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        recipes: state.recipes.recipes
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppRootStateType>(mapStateToProps,
    {getRecipes})
(RecipesContainer);