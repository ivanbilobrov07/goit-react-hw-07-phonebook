import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';

import {
  Table,
  TableRow,
  TableTitleCell,
  TableHeader,
} from './ContactList.styled';
import { Message } from 'components/Message';
import { ContactItem } from 'components/ContactItemThunk';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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
                <ContactItem id={id} name={name} number={number} />
              </TableRow>
            ))}
          </tbody>
        </Table>
      ) : (
        <Message text="There are no contacts here" />
      )}
    </>
  );
};
