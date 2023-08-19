import { useEffect, useState } from 'react';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApiRTK';
import { errorNotify, successNotify } from 'utils';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactListRTK';
import { Controlls } from 'components/Controlls';
import { FormModal } from 'components/FormModal';
import { Message } from 'components/Message';
import { Modal } from 'components/Modal';
import { Spinner } from 'components/Spinner';

export const Phonebook = () => {
  const [addContact, addContactData] = useAddContactMutation();
  const { isLoading, isError: isErrorInGetting } = useGetContactsQuery();

  const [isModalShown, setIsModalShown] = useState(false);

  useEffect(() => {
    if (addContactData.isError) {
      errorNotify('Something went wrong with adding this contact');
    }
  }, [addContactData.isError]);

  useEffect(() => {
    if (addContactData.isSuccess) {
      successNotify(
        `New contact "${addContactData.data.name}" was successfully added`
      );
    }
  }, [addContactData, addContactData.isSuccess]);

  const handleAddContact = data => {
    addContact(data);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalShown(state => !state);
  };

  if (isErrorInGetting) {
    return <Message text={'Something went wrong, try to use it later'} />;
  }

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

      <ContactList />
    </>
  );
};
