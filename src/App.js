import React from 'react';
import { nanoid } from 'nanoid';
import Container from './components/container/Container';
import Section from './components/section/Section';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
// import initData from './tempData/data.json';
import ContactFilter from './components/contactFilter/ContactFilter';
import Header from './components/header/Header';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  isInContacts = ({ name, number }) => {
    const normalizedName = name.toLowerCase().replace(/\s+/g, '');
    const normalizedNumber = number.replace(/\D/g, '');
    return this.state.contacts.some(contact => {
      return (
        contact.name.toLowerCase().replace(/\s+/g, '') === normalizedName ||
        contact.number.replace(/\D/g, '') === normalizedNumber
      );
    });
  };

  addContact = newContact => {
    const { name, number } = newContact;

    if (this.isInContacts(newContact)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));

    if (storageContacts) {
      this.setState({ contacts: storageContacts });
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <Header title="Phonebook">
        <Container>
          <Section title={'Phonebook'}>
            <ContactForm handleSubmit={this.addContact} />
          </Section>

          <Section title={'Contacts'}>
            <ContactFilter
              value={this.state.filter}
              onChange={this.filterChange}
            />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.delContact}
            />
          </Section>
        </Container>
      </Header>
    );
  }
}

export default App;
