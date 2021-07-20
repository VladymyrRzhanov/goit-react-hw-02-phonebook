import React from 'react'


const Filter = ({ filter, onFilterName }) => (
    <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={onFilterName}/>
    </label>
)

export default Filter;