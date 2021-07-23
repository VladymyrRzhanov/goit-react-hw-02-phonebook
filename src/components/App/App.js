import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import initialContacts from '../ContactsList/initialContacts.json';
import s from './App.module.css';

export default class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  static props = {
    contacts: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  };

  onSubmitHandler = data => {
    const { contacts } = this.state;
    !contacts.some(({ name }) => name.includes(data.name))
      ? this.setState(({ contacts }) => ({
          contacts: [data, ...contacts],
        }))
      : alert(`${data.name} is already in contacts`);
  };

  onFilterName = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterName = () => {
    const { filter, contacts } = this.state;
    const normalizedContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact),
    );
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContact = this.getFilterName();
    return (
      <>
        <Section>
          <h1 className={s.title}>Phonebook</h1>
          <Form onSubmit={this.onSubmitHandler} />
        </Section>
        <Section>
          <h2 className={s.subtitle}>Contacts</h2>
          <Filter filter={filter} onFilterName={this.onFilterName} />
          <ContactsList
            contacts={filteredContact}
            onDelete={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
