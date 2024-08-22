import React, {ChangeEvent, memo} from 'react';
import s from "./Card.module.scss"
import defaultImage from "../../assets/images/defaultImage.png"
import closeImage from "../../assets/images/close.png"
import plusImage from "../../assets/images/plus.png"

type CardProps = {
    image: string
    name: string
    category: string
    area: string
    isCardSelectionPossibility?: boolean
    isSelected?: boolean
    handleToggleSelection?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Card: React.FC<CardProps> = (props) => {

    const handleToggleSelection = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(props.handleToggleSelection) {
            props.handleToggleSelection(e);
        }
    }
    return (
        <div className={s.card}>
            <div className={s.photo}>
                <img src={props.image || defaultImage} alt="avatar"/>
                {
                    props.isCardSelectionPossibility &&
                    <div className={s.photo__changeIcon} onClick={(e) => handleToggleSelection(e)}>
                        <img src={props.isSelected ? closeImage : plusImage} alt="change"/>
                    </div>
                }
            </div>
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