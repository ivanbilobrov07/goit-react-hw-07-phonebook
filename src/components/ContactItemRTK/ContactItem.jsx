import { useState } from 'react';
import {
  useEditContactMutation,
  useRemoveContactMutation,
} from 'redux/contacts/contactsApiRTK';

import { IconButton } from 'components/IconButton/IconButton';
import { TableDescrCell } from './ContactItem.styled';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { FormModal } from 'components/FormModal';
import { ContactForm } from 'components/ContactFormRTK';
import { Spinner } from 'components/Spinner';
import { DeleteModal } from 'components/DeleteModal';
import { errorNotify, successNotify } from 'utils';

export const ContactItem = ({ name, id, number }) => {
  const [editContact, editContactData] = useEditContactMutation();
  const [removeContact, removeContactData] = useRemoveContactMutation();

  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);

  const closeModal = () => {
    setIsDeleteModalShown(false);
    setIsEditModalShown(false);
  };

  const handleDeleteContact = async () => {
    const response = await removeContact(id);
    const isSuccess = !response.error;

    isSuccess
      ? successNotify(`Contact "${name}" was successfully deleted`)
      : errorNotify('Something went wrong with deleting this contact');
    closeModal();
  };

  const handleEditContact = async data => {
    if (name === data.name && number === data.number) {
      closeModal();
      return;
    }

    const response = await editContact(data);
    const isSuccess = !response.error;

    isSuccess
      ? successNotify(`Contact "${name}" was successfully edited`)
      : errorNotify('Something went wrong with editing this contact');
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
