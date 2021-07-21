import React from 'react';
import PropTypes from 'prop-types'
import s from "./ContactsList.module.css";

const ContactsList = ({ contacts, onDelete }) =>
    <div className={s.contacts}>
        <ul className={s.list}>{
    contacts.map(({ id, name, number }) =>
        <li key={id} className={s.item}>
            <button className={s.button} type="button" onClick={() => onDelete(id)}></button>
            <div className={s.data}>
                <span className={s.name}>{name}:</span>
                <span className={s.number}>{number}</span>
            </div>
            
        </li>
    )
    }
    </ul>
    </div>

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactsList;

