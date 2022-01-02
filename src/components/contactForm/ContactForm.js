import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormContacts,
  InputLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.resset();
  };

  resset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContacts onSubmit={this.onSubmit}>
        <InputLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputLabel>

        <InputLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleNameChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormContacts>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
