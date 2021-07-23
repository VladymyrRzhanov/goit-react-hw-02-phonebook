import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => (
  <div className={s.contacts}>
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
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
