import React from 'react';
import s from "./RecipeInfo.module.scss"
import {Recipe} from "../../interfaces/recipes";
import {Link} from "react-router-dom";
import {RECIPES_ROUTE} from "../../utils/routes/constants";

type RecipeInfoProps = {
    recipe: Recipe | null
}
const RecipeInfo: React.FC<RecipeInfoProps> = ({recipe}) => {
    const getIngredientInfo = (): string[] => {
        if(recipe?.strIngredients) {
            return recipe?.strIngredients.map((ingredient,i) => {
                return `${ingredient}(${recipe?.strMeasures[i].trim()})`;
            })
        }
        return [];
    }

    return (
        <div className={s.recipeInfo}>
            <Link className={s.back} to={RECIPES_ROUTE}>
                Головна сторінка
            </Link>
            <div className={s.recipeInfo__content}>
                <div className={s.leftBlock}>
                    <div className={s.leftBlock__topContent}>
                        <h3 className={s.leftBlock__topContent__title}>
                            {`№${recipe?.idMeal}.`} <span>{recipe?.strMeal}</span>{`(${recipe?.strArea})`}
                        </h3>
                        <div className={s.leftBlock__topContent__tags}>{recipe?.strTags}</div>
                    </div>
                    <div className={s.photo}>
                        <img src={recipe?.strMealThumb} alt="meal"/>
                    </div>
                    <div className={s.pagination}></div>
                </div>
                <div className={s.rightBlock}>
                    <h3 className={s.category}><span>Категорія:</span> {recipe?.strCategory}</h3>
                    <div className={s.recourses}>
                        <h3 className={s.recourses__title}>Посилання: </h3>
                        <a href={recipe?.strSource}>Ресурс</a>
                        <span>, </span>
                        <a href={recipe?.strYoutube}>YouTube</a>
                    </div>
                    <div className={s.ingredientsBlock}>
                        <h3 className={s.ingredientsBlock__title}>Інгредієнти:</h3>
                        <ul className={s.ingredientsBlock__ingredients}>
                            {getIngredientInfo().map(info => (
                                <li key={s.rightBlock__ingredients__item}>{info}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.instructionsBlock}>
                        <h3 className={s.instructionsBlock__title}>Інструкції:</h3>
                        <div className={s.instructionsBlock__description}>{recipe?.strInstructions}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeInfo;