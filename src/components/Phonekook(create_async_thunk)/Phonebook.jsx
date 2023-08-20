import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from 'redux/selectors';
import { addContact, getContacts } from 'redux/contacts/contactsApiThunk';
import { errorNotify } from 'utils';

import { ContactForm } from 'components/ContactFormThunk';
import { Controlls } from 'components/Controlls';
import { Modal } from 'components/Modal';
import { FormModal } from 'components/FormModal';
import { Spinner } from 'components/Spinner';
import { ContactList } from 'components/ContactListThunk';

export const Phonebook = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      errorNotify(error);
    }
  }, [error]);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleAddContact = data => {
    dispatch(addContact(data));
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalShown(state => !state);
  };

  return (
    <>
      <Controlls toggleModal={toggleModal} />

      {isModalShown && (
        <FormModal onClose={toggleModal}>
          <ContactForm handleContactChange={handleAddContact} />
        </FormModal>
      )}

      {isLoading && (
        <Modal>
          <Spinner position="center" />
        </Modal>
      )}

      {error && errorNotify()}

      <ContactList />
    </>
  );
};
