import React, { Component } from 'react';
import Button from "../Button";
import { v4 as uuidv4 } from 'uuid';


export default class Form extends Component {
    state = {
    id: '',
    name: '',
    number: ''
  };

    // contactId = uuidv4();
    
    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            id: uuidv4(),
            [name]: value
        });
    };

    handleSubmit = e => {
        const { onSubmit } = this.props;
        e.preventDefault();
        onSubmit(this.state);
        this.reset()
    };

    reset = () => {
        this.setState({
            id: '',
            name: '',
            number: ''
        })
    }


    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.handleInputChange}
                    />
                </label>
                <Button type={"submit"} title={"Add contact"} />
            </form>
        );
    };
};