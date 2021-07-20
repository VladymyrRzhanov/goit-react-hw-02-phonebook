import React from 'react';

const ContactsList = ({contacts,onDelete}) => <ul>{
    contacts.map(({ id, name, number }) =>
        <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={()=>onDelete(id)}>Delete</button>
        </li>
    )
}</ul>

export default ContactsList;