import { useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectIsLoading);

  return (
    <>
      <ContactForm />
      <Filter />
      {loading && <Loader />}
      <ContactList />
    </>
  );
};

export default Contacts;
