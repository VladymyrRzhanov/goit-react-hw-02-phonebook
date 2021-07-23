import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        name={name}
        number={number}
        onDelete={() => onDelete(id)}
        key={id}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactsList;
