import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {RECIPES_ROUTE} from "../../utils/routes/constants";
import RecipesContainer from "../../components/recipes/RecipesContainer";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(RECIPES_ROUTE)
    }, [])

    return (
        <div></div>
    );
};

export default Home;