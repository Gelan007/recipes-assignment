import React, {memo} from 'react';
import s from "./Card.module.scss"
import defaultImage from "../../assets/images/defaultImage.png"

type CardProps = {
    image: string
    name: string
    category: string
    area: string
}

const Card: React.FC<CardProps> = (props) => {

    return (
        <div className={s.card}>
            <div className={s.photo}><img src={props.image || defaultImage} alt="avatar"/></div>
            <div className={s.name}>{props.name}</div>
            <div className={s.contacts}>
                <div className={s.contacts__role}>Категорія: {props.category}</div>
                <div className={s.contacts__email}>Місце походження: {props.area}</div>
            </div>
        </div>
    );
};

export default Card;