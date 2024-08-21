import React from 'react';
import Card from "../card/Card";
import s from "./Recipes.module.scss";
import {Recipe} from "../../interfaces/recipes";
import InputGrey from "../UI/inputs/InputGrey";
import {Link} from "react-router-dom";
import {RECIPES_ROUTE} from "../../utils/routes/constants";

type RecipesType = {
    filteredRecipes: Recipe[];
    categories: string[];
    selectedCategories: string[];
    handleCategoryChange: (category: string) => void;
    handleSearchChange: (value: string) => void;
    searchTerm: string;
};

const Recipes: React.FC<RecipesType> = ({
                                            filteredRecipes,
                                            categories,
                                            selectedCategories,
                                            handleCategoryChange,
                                            handleSearchChange,
                                            searchTerm
                                        }) => {
    return (
        <div className={s.recipes}>
            <div className={s.input}>
                <InputGrey
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    debounceTimeout={300}
                />
            </div>
            <div className={s.recipes__content}>
                <div className={s.filtration}>
                    {categories.map((category, index) => (
                        <div className={s.filtration__item} key={index}>
                            <span>{category}</span>
                            <input
                                type="checkbox"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                            />
                        </div>
                    ))}
                </div>
                <div className={s.cards}>
                    {filteredRecipes.map(recipe => (
                        <Link to={`${RECIPES_ROUTE}/${recipe.idMeal}`} key={recipe.idMeal}>
                            <Card
                                image={recipe.strMealThumb}
                                name={recipe.strMeal}
                                category={recipe.strCategory}
                                area={recipe.strArea}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recipes;
