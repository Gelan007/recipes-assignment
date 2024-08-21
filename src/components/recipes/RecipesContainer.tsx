import React, {useEffect, useState} from 'react';
import Recipes from "./Recipes";
import {Recipe} from "../../interfaces/recipes";
import {AppRootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {getRecipes} from "../../redux/slices/recipes-slice";

type MapStatePropsType = {
    recipes: Recipe[];
}
type MapDispatchPropsType = {
    getRecipes: () => void;
}
type RecipesContainerProps = MapStatePropsType & MapDispatchPropsType;

const RecipesContainer: React.FC<RecipesContainerProps> = ({recipes, getRecipes}) => {
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const categories = Array.from(new Set(recipes.map(recipe => recipe.strCategory)));

    useEffect(() => {
        getRecipes();
    }, [getRecipes]);

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredRecipes(recipes);
        } else {
            setFilteredRecipes(recipes.filter(recipe => selectedCategories.includes(recipe.strCategory)));
        }
    }, [recipes, selectedCategories]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category) ? prev.filter(cat => cat !== category) : [...prev, category]
        );
    };

    return (
        <Recipes
            filteredRecipes={filteredRecipes}
            categories={categories}
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
        />
    );
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    recipes: state.recipes.recipes,
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {getRecipes}
)(RecipesContainer);
