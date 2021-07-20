import React from 'react';
import s from "./Filter.module.css";


const Filter = ({ filter, onFilterName }) => (
    <label className={s.label}>
        <span className={s.title}>Find contacts by name:</span>
        <input className={s.input} type="text" value={filter} onChange={onFilterName}/>
    </label>
)

export default Filter;