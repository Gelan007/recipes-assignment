import React from 'react';
import Card from "../card/Card";
import s from "./Recipes.module.scss"

const Recipes = () => {
    return (
        <div className={s.recipes}>
            <Card/>
            <Card/>
        </div>
    );
};

export default Recipes;