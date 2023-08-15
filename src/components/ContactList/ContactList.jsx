import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectContacts, selectFilter } from 'redux/selectors';
import { editContact } from 'redux/contacts/contactsAPI';

import {
  Table,
  TableRow,
  TableTitleCell,
  TableHeader,
} from './ContactList.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactItem } from 'components/ContactItem';
import { Message } from 'components/Message';
import { FormModal } from 'components/FormModal';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const [isEditModalShown, setIsEditModalShown] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    closeModal();
  }, [contacts]);

  const openModal = id => {
    setIsEditModalShown(true);
    setEditItemId(id);
  };

  const closeModal = () => {
    setIsEditModalShown(false);
  };

  const handleEditContact = data => {
    dispatch(editContact(data));
  };

  const findContactByName = nameValue => {
    return contacts.find(contact => {
      return nameValue === contact.name && contact.id !== editItemId;
    });
  };

  const findContactByNumber = numberValue => {
    return contacts.find(contact => {
      return numberValue === contact.number && contact.id !== editItemId;
    });
  };

  const getFilteredContacts = () =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {filteredContacts.length ? (
        <Table>
          <TableHeader>
            <TableRow>
              <th>Names</th>
              <th>Phone Number</th>
              <TableTitleCell>Edit</TableTitleCell>
              <TableTitleCell>Delete</TableTitleCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {filteredContacts.map(({ name, number, id }) => (
              <TableRow key={id}>
                <ContactItem
                  id={id}
                  name={name}
                  number={number}
                  openModal={openModal}
                />
              </TableRow>
            ))}
          </tbody>
        </Table>
      ) : (
        <Message text="There are no contacts here" />
      )}

      {isEditModalShown && (
        <FormModal onClose={closeModal}>
          <ContactForm
            handleContactChange={handleEditContact}
            findContactByName={findContactByName}
            findContactByNumber={findContactByNumber}
            initialValues={filteredContacts.find(({ id }) => id === editItemId)}
          />
        </FormModal>
      )}
    </>
  );
};
