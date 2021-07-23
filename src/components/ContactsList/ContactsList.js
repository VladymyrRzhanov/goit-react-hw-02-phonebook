import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => (
  <div className={s.contacts}>
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <ContactListItem
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        </li>
      ))}
    </ul>
  </div>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactsList;
