import React from 'react';
import PropTypes from 'prop-types'
import s from "./Filter.module.css";


const Filter = ({ filter, onFilterName }) => (
    <label className={s.label}>
        <span className={s.title}>Find contacts by name:</span>
        <input className={s.input} type="text" value={filter} onChange={onFilterName}/>
    </label>
)

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterName: PropTypes.func.isRequired,
}

export default Filter;