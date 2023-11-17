import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  ErrorMsg,
  InputContainer,
  Text,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Button } from '@chakra-ui/react';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Please, enter only letter')
    .min(3, 'Too short!')
    .required('This field is required!'),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{2}-\d{2}$/, 'Format: 066-123-45-67')
    .required('This field is required!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, helpers) => {
        const check = contacts.some(({ name }) => name === values.name);
        if (check) {
          alert(`${values.name} is already in contacts`);
          return;
        }
        const finalContact = {
          name: values.name,
          number: values.number,
        };
        dispatch(addContact(finalContact));
        helpers.resetForm();
      }}
    >
      <StyledForm>
        <InputContainer>
          <Text>Name</Text>
          <StyledField type="text" name="name" />

          <ErrorMsg name="name" component="div" />
        </InputContainer>
        <InputContainer>
          <Text>Number</Text>
          <StyledField type="tel" name="number" />

          <ErrorMsg name="number" component="div" />
        </InputContainer>

        <Button
          // bg="#82d47b"
          border="1px solid #82d47b"
          borderRadius="4px 8px"
          colorScheme="green"
          _activeLink={{ bg: 'white', color: '#82d47b' }}
          bgGradient="linear(to-l, #23eb27, #82d47b)"
          type="submit"
        >
          Add contact
        </Button>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
