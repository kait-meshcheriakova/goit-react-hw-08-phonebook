import { useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { Container, SubTitle, Title } from 'components/App.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectIsLoading);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>

      <Filter />
      {loading && <Loader />}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};

export default Contacts;
