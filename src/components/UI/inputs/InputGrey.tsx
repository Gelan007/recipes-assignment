import React, {InputHTMLAttributes} from 'react';
import s from './Inputs.module.scss'
import {DebounceInput} from "react-debounce-input";

interface InputGreyProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (value: any) => void;
    value: any
    debounceTimeout?: number
}

const InputGrey:React.FC<InputGreyProps> = ({debounceTimeout = 0, ...props}) => {
    return (
        <DebounceInput className={s.inputGrey}
                       debounceTimeout={debounceTimeout}
                       {...props}
        />
    );
};

export default InputGrey;