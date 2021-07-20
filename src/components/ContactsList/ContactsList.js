import React from 'react';
import s from "./ContactsList.module.css";

const ContactsList = ({ contacts, onDelete }) =>
    <div className={s.contacts}>
        <ul className={s.list}>{
    contacts.map(({ id, name, number }) =>
        <li key={id} className={s.item}>
            <div className={s.data}>
                <span className={s.name}>{name}:</span>
                <span className={s.number}>{number}</span>
            </div>
            <button className={s.button} type="button" onClick={() => onDelete(id)}></button>
        </li>
    )
    }
    </ul>
    </div>

export default ContactsList;