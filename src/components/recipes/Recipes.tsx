import React from 'react';
import Card from "../card/Card";
import s from "./Recipes.module.scss";
import {Recipe} from "../../interfaces/recipes";

type RecipesType = {
    filteredRecipes: Recipe[];
    categories: string[];
    selectedCategories: string[];
    handleCategoryChange: (category: string) => void;
}

const Recipes: React.FC<RecipesType> = ({
                                            filteredRecipes,
                                            categories,
                                            selectedCategories,
                                            handleCategoryChange
                                        }) => {
    return (
        <div className={s.recipes}>
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
                        <Card
                            key={recipe.idMeal}
                            image={recipe.strMealThumb}
                            name={recipe.strMeal}
                            category={recipe.strCategory}
                            area={recipe.strArea}
                        />
                    ))}
                </div>
                <div className={s.pagination}></div>
            </div>
        </div>
    );
};

export default Recipes;
