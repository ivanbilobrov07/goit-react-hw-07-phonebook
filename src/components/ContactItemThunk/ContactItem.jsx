import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editContact, removeContact } from 'redux/contacts/contactsApiThunk';

import { IconButton } from 'components/IconButton/IconButton';
import { TableDescrCell } from './ContactItem.styled';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { FormModal } from 'components/FormModal';
import { ContactForm } from 'components/ContactFormThunk';
import { DeleteModal } from 'components/DeleteModal';

export const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);

  const closeModal = () => {
    setIsDeleteModalShown(false);
    setIsEditModalShown(false);
  };

  const handleDeleteContact = () => {
    dispatch(removeContact(id));
    closeModal();
  };

  const handleEditContact = data => {
    if (name === data.name && number === data.number) {
      closeModal();
      return;
    }

    dispatch(editContact(data));
    closeModal();
  };

  return (
    <>
      <td>{name}</td>
      <td>{number}</td>
      <TableDescrCell>
        <IconButton onClick={() => setIsEditModalShown(true)}>
          <FiEdit size={23} />
        </IconButton>
      </TableDescrCell>
      <TableDescrCell>
        <IconButton onClick={() => setIsDeleteModalShown(true)}>
          <MdDelete size={23} />
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
