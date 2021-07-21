import React from 'react';
import PropTypes from 'prop-types'
import s from "./Button.module.css";

const Button = ({type}) => (
    <button className={s.button} type={type}>
    </button>
)

Button.propTypes = {
    type: PropTypes.string.isRequired,
}

export default Button;