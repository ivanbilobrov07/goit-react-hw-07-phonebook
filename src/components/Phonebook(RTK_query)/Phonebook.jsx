import { useState } from 'react';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApiRTK';
import { errorNotify, successNotify } from 'utils';

import { ContactForm } from 'components/ContactFormRTK';
import { ContactList } from 'components/ContactListRTK';
import { Controlls } from 'components/Controlls';
import { FormModal } from 'components/FormModal';
import { Message } from 'components/Message';
import { Modal } from 'components/Modal';
import { Spinner } from 'components/Spinner';

export const Phonebook = () => {
  const [addContact] = useAddContactMutation();
  const { isLoading, isError: isErrorInGetting } = useGetContactsQuery();

  const [isModalShown, setIsModalShown] = useState(false);

  const handleAddContact = async data => {
    const response = await addContact(data);
    const isSuccess = !response.error;

    isSuccess
      ? successNotify(
          `New contact "${response.data.name}" was successfully added`
        )
      : errorNotify('Something went wrong with adding this contact');
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
