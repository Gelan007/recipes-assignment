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
            <div className={s.card__content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.description}>
                    <div className={s.description__category}>Категорія: <span>{props.category}</span></div>
                    <div className={s.description__area}>Місце походження: <span>{props.area}</span></div>
                </div>
            </div>
        </div>
    );
};

export default Card;