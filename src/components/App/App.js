import React, { Component } from 'react';
import Form from "../Form";
import Section from "../Section";
import ContactsList from "../ContactsList";
import Filter from "../Filter";
import initialContacts from "../ContactsList/initialContacts.json";
import './App.css';

export default class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  };
  
  onSubmitHandler = data => {
    this.setState(({contacts}) => ({
      contacts: [data, ...contacts]
    }));
  };

  onFilterName = e => {
    this.setState({filter: e.currentTarget.value})
  }

  getFilterName = () => {
    const { filter, contacts } = this.state;
    const normalizedContact = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContact));
  }

  deleteContact = (id) => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {
    const { filter } = this.state;
    const filteredContact = this.getFilterName();
    return (
      <>
        <Section title={'Phonebook'}>
          <Form onSubmit={this.onSubmitHandler} />
        </Section>
        <Section>
          <Filter filter={filter} onFilterName={this.onFilterName}/>
          <ContactsList contacts={filteredContact} onDelete={this.deleteContact}/>
        </Section>
      </>
    )
  };
};

