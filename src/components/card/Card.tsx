import React, {memo} from 'react';
import s from "./Card.module.scss"
import defaultImage from "../../assets/images/defaultImage.png"

type CardProps = {
    //image: string
}

const Card: React.FC<CardProps> = (props) => {

    return (
        <div className={s.card}>
            <div className={s.photo}><img src={defaultImage} alt="avatar"/></div>
            <div className={s.name}>Chicken pro</div>
            <div className={s.contacts}>
                <div className={s.contacts__role}>category: Chicken</div>
                <div className={s.contacts__email}>place: Ukr</div>
            </div>
        </div>
    );
};

export default Card;