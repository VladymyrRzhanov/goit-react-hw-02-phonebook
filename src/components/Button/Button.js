import React from 'react';
import s from "./Button.module.css";

const Button = ({type,title}) => (
    <button className={s.button} type={type}>
        {title}
    </button>
)

export default Button;