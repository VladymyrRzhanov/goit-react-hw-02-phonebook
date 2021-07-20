import React from 'react'

const ContactsList = ({contacts}) => <ul>{
    contacts.map(({ id, name, number }) =>
        <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
        </li>
    )
}</ul>

export default ContactsList;