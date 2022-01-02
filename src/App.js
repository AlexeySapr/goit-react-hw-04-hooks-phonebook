import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Container from './components/container/Container';
import Section from './components/section/Section';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
// import initData from './tempData/data.json';
import ContactFilter from './components/contactFilter/ContactFilter';
import Header from './components/header/Header';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const { name, number } = newContact;

    if (isInContacts(newContact)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prev => [contact, ...prev]);
  };

  const delContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const isInContacts = ({ name, number }) => {
    const normalizedName = name.toLowerCase().replace(/\s+/g, '');
    const normalizedNumber = number.replace(/\D/g, '');
    return contacts.some(contact => {
      return (
        contact.name.toLowerCase().replace(/\s+/g, '') === normalizedName ||
        contact.number.replace(/\D/g, '') === normalizedNumber
      );
    });
  };

  useEffect(() => {
    console.log('contacts: ', contacts);
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  // const normalizedFilter = filter.toLowerCase();
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter),
  // );

  return (
    <Header title="Phonebook">
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm handleSubmit={addContact} />
        </Section>

        <Section title={'Contacts'}>
          <ContactFilter value={filter} onChange={filterChange} />
          <ContactList
            contacts={filteredContacts()}
            onDeleteContact={delContact}
          />
        </Section>
      </Container>
    </Header>
  );
};

export default App;
