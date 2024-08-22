import React from 'react';
import s from "./SelectedRecipes.module.scss";
import {Recipe} from "../../interfaces/recipes";
import CardContainer from "../card/CardContainer";
import {Link} from "react-router-dom";
import {RECIPES_ROUTE} from "../../utils/routes/constants";
import GoBack from "../goBack/GoBack";

type SelectedRecipesProps = {
    recipes: Recipe[]
    formattedIngredients: string[]
}
const SelectedRecipes:React.FC<SelectedRecipesProps> = ({recipes, ...props}) => {

    return (
        <div className={s.selectedRecipes}>
            <div className={s.back}><GoBack/></div>
            <h2 className={s.mainTitle}>Обрані рецепти</h2>
            <div className={s.cards}>
                {recipes.map(recipe => (
                    <CardContainer key={recipe.idMeal}
                                   recipe={recipe}
                                   isCardSelectionPossibility={true}
                    />
                ))}
            </div>
            <div className={s.ingredients}>
                <h3 className={s.ingredients__title}>
                    Інгредієнти:
                </h3>
                <ul className={s.ingredients__body}>
                    {props.formattedIngredients.map(ingredient => (
                        <li className={s.ingredients__item}>
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={s.instructions}>
                <h3 className={s.instructions__title}>Інструкції:</h3>
                <div className={s.instructions__body}>
                    {recipes.map((recipe, index) => (
                        <div className={s.instructions__body__item}>
                            <span>{recipe.strMeal}: </span>{recipe.strInstructions}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectedRecipes;