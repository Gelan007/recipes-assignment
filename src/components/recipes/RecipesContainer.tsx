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
    const [searchTerm, setSearchTerm] = useState<string>('');
    const categories = Array.from(new Set(recipes.map(recipe => recipe.strCategory)));

    useEffect(() => {
        getRecipes();
    }, [getRecipes]);

    useEffect(() => {
        let filtered = recipes;
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(recipe => selectedCategories.includes(recipe.strCategory));
        }
        if (searchTerm) {
            filtered = filtered.filter(recipe => recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        setFilteredRecipes(filtered);
    }, [recipes, selectedCategories, searchTerm]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category) ? prev.filter(cat => cat !== category) : [...prev, category]
        );
    };

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    return (
        <Recipes
            filteredRecipes={filteredRecipes}
            categories={categories}
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            handleSearchChange={handleSearchChange}
            searchTerm={searchTerm}
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
