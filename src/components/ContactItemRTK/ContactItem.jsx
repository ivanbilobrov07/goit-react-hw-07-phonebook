import { useEffect, useState } from 'react';
import {
  useEditContactMutation,
  useRemoveContactMutation,
} from 'redux/contacts/contactsApiRTK';

import { IconButton } from 'components/IconButton/IconButton';
import { TableDescrCell } from './ContactItem.styled';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { FormModal } from 'components/FormModal';
import { ContactForm } from 'components/ContactForm';
import { Spinner } from 'components/Spinner';
import { DeleteModal } from 'components/DeleteModal';
import { errorNotify, successNotify } from 'utils';

export const ContactItem = ({ name, id, number }) => {
  const [editContact, editContactData] = useEditContactMutation();
  const [removeContact, removeContactData] = useRemoveContactMutation();

  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);

  useEffect(() => {
    const isError = editContactData.isError || removeContactData.isError;

    if (!isError) {
      return;
    } else if (editContactData.isError) {
      errorNotify('Something went wrong with editing this contact');
    } else if (removeContactData.isError) {
      errorNotify('Something went wrong with deleting this contact');
    }
  }, [editContactData.isError, removeContactData.isError]);

  useEffect(() => {
    if (editContactData.isSuccess) {
      successNotify(
        `Contact "${editContactData.data.name}" was successfully edited`
      );
    } else if (removeContactData.isSuccess) {
      successNotify(
        `Contact "${removeContactData.data.name}" was successfully deleted`
      );
    }
  }, [
    editContactData.data?.name,
    editContactData.isSuccess,
    removeContactData.data?.name,
    removeContactData.isSuccess,
  ]);

  const closeModal = () => {
    setIsDeleteModalShown(false);
    setIsEditModalShown(false);
  };

  const handleDeleteContact = () => {
    removeContact(id);
    closeModal();
  };

  const handleEditContact = data => {
    if (name === data.name && number === data.number) {
      closeModal();
      return;
    }

    editContact(data);
    closeModal();
  };

  return (
    <>
      <td>{name}</td>
      <td>{number}</td>
      <TableDescrCell>
        <IconButton onClick={() => setIsEditModalShown(true)}>
          {editContactData.isLoading ? (
            <Spinner size={19} />
          ) : (
            <FiEdit size={23} />
          )}
        </IconButton>
      </TableDescrCell>
      <TableDescrCell>
        <IconButton onClick={() => setIsDeleteModalShown(true)}>
          {removeContactData.isLoading ? (
            <Spinner size={19} />
          ) : (
            <MdDelete size={23} />
          )}
        </IconButton>
      </TableDescrCell>
      {isEditModalShown && (
        <FormModal onClose={closeModal}>
          <ContactForm
            handleContactChange={handleEditContact}
            initialValues={{ name, id, number }}
          />
        </FormModal>
      )}
      {isDeleteModalShown && (
        <DeleteModal
          agreeFunc={handleDeleteContact}
          onClose={closeModal}
          toDeleteName={name}
        />
      )}
    </>
  );
};
