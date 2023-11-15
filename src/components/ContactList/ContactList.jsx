import React from 'react';

import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name}: <span> {number}</span>
          </p>

          <Button
            type="button"
            name="delete"
            onClick={() => dispatch(deleteContact(id))}
          >
            &times;
          </Button>
        </Item>
      ))}
    </List>
  );
};
export default ContactList;
