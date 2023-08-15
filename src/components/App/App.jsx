import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { addContact, getContacts } from 'redux/contacts/contactsAPI';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Controlls } from 'components/Controlls';
import { Container, Title } from './App.styled';
import { Modal } from 'components/Modal';
import { FormModal } from 'components/FormModal';
import { Spinner } from 'components/Spinner';

export const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const findContactByName = nameValue =>
    contacts.find(({ name }) => name === nameValue);

  const findContactByNumber = numberValue =>
    contacts.find(({ number }) => numberValue === number);

  const handleAddContact = data => {
    dispatch(addContact(data));
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalShown(state => !state);
  };

  console.log(error);

  return (
    <Container>
      <Title>Phonebook</Title>
      <div>
        <Controlls toggleModal={toggleModal} />

        {isModalShown && (
          <FormModal onClose={toggleModal}>
            <ContactForm
              handleContactChange={handleAddContact}
              findContactByName={findContactByName}
              findContactByNumber={findContactByNumber}
            />
          </FormModal>
        )}

        {isLoading && (
          <Modal>
            <Spinner />
          </Modal>
        )}

        <ContactList />
      </div>
    </Container>
  );
};
