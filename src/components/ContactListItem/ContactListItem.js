import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ onDelete, name, number }) => (
  <>
    <button className={s.button} type="button" onClick={onDelete}></button>
    <div className={s.data}>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>
    </div>
  </>
);

ContactListItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
