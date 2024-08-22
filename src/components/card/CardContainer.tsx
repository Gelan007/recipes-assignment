import React from 'react';
import {AppRootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Recipe} from "../../interfaces/recipes";
import {toggleRecipeSelection} from "../../redux/slices/recipes-slice";
import Card from "./Card";

type MapStatePropsType = {
    selectedRecipes: Recipe[];
}
type MapDispatchPropsType = {
    toggleRecipeSelection: (recipe: Recipe) => void;
}
type RecipesContainerProps = MapStatePropsType & MapDispatchPropsType & {
    recipe: Recipe
    isCardSelectionPossibility?: boolean
};

const CardContainer:React.FC<RecipesContainerProps> = (props) => {
    const isSelected = props.selectedRecipes.some(r => r.idMeal === props.recipe.idMeal);

    const handleToggleSelection = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        props.toggleRecipeSelection(props.recipe);
    };

    return (
        <Card image={props.recipe.strMealThumb} area={props.recipe.strArea}
              name={props.recipe.strMeal} category={props.recipe.strCategory}
              isSelected={isSelected} handleToggleSelection={handleToggleSelection}
              isCardSelectionPossibility={props.isCardSelectionPossibility}
        />
    );
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    selectedRecipes: state.recipes.selectedRecipes,
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {toggleRecipeSelection}
)(CardContainer);
