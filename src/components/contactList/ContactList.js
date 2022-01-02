import PropTypes from 'prop-types';
import { List, ListItem, Text, ItemBtn } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <ItemBtn type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ItemBtn>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
