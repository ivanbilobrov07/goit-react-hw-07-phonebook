import { useDispatch } from 'react-redux';

import { removeContact } from 'redux/contacts/contactsAPI';

import { IconButton } from 'components/IconButton/IconButton';
import { TableDescrCell } from './ContactItem.styled';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

export const ContactItem = ({ name, id, number, openModal }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = idValue => {
    dispatch(removeContact(idValue));
  };

  return (
    <>
      <td>{name}</td>
      <td>{number}</td>
      <TableDescrCell>
        <IconButton onClick={() => openModal(id)}>
          <FiEdit size={20} />
        </IconButton>
      </TableDescrCell>
      <TableDescrCell>
        <IconButton onClick={() => handleRemoveContact(id)}>
          <MdDelete size={20} />
        </IconButton>
      </TableDescrCell>
    </>
  );
};
