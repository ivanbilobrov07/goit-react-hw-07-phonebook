import { useGetContactsQuery } from 'redux/contacts/contactsApiRTK';
import { useSelector } from 'react-redux';
import { selectFilterByOption, selectFilterByQuery } from 'redux/selectors';

import {
  Table,
  TableRow,
  TableTitleCell,
  TableHeader,
} from './ContactList.styled';
import { ContactItem } from 'components/ContactItemRTK';
import { Message } from 'components/Message';

export const ContactList = () => {
  const { data: contacts, isFetching } = useGetContactsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const option = useSelector(selectFilterByOption);
  const query = useSelector(selectFilterByQuery);

  const getFilteredContacts = data => {
    let filteredContacts = [...data];

    switch (option) {
      case 'without': {
        break;
      }
      case 'ascending': {
        filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      }
      case 'descending': {
        filteredContacts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      }
      default:
        break;
    }

    return filteredContacts.filter(({ name }) =>
      name.toLowerCase().includes(query)
    );
  };

  const filteredContacts = contacts && getFilteredContacts(contacts);

  return (
    <>
      {filteredContacts?.length ? (
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
            {filteredContacts.map(item => (
              <TableRow key={item.id}>
                <ContactItem {...item} />
              </TableRow>
            ))}
          </tbody>
        </Table>
      ) : (
        !isFetching && <Message text="There are no contacts here" />
      )}
    </>
  );
};
