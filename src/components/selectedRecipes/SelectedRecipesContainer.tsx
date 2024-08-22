import React from 'react';
import SelectedRecipes from "./SelectedRecipes";
import {AppRootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Recipe} from "../../interfaces/recipes";
import {getAllIngredientsInfoWithMeasurements} from "../../utils/recipes/ingredients";

type MapStatePropsType = {
    selectedRecipes: Recipe[]
}
type MapDispatchPropsType = {
}
type SelectedRecipesContainerProps = MapStatePropsType & MapDispatchPropsType & {
};

const SelectedRecipesContainer: React.FC<SelectedRecipesContainerProps> = (props) => {
    return (
        <SelectedRecipes
            recipes={props.selectedRecipes}
            formattedIngredients={getAllIngredientsInfoWithMeasurements(props.selectedRecipes)}
        />
    );
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    selectedRecipes: state.recipes.selectedRecipes,
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {}
)(SelectedRecipesContainer);
