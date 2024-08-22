import React from 'react';
import s from "./GoBack.module.scss";
import {Link} from "react-router-dom";
import {RECIPES_ROUTE} from "../../utils/routes/constants";

type GoBackProps = {
    link?: string
    text?: string
}
const GoBack: React.FC<GoBackProps> = ({link = RECIPES_ROUTE, text = "Головна сторінка"}) => {
    return (
        <Link className={s.back} to={link}>
            {text}
        </Link>
    );
};

export default GoBack;