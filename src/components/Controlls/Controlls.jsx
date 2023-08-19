import { TextButton } from 'components/TextButton';
import { FilterContacts } from 'components/FilterContacts';
import { PhonebookControlls } from './Controlls.styled';
import { ConstactsSelect } from 'components/ConstactsSelect';

export const Controlls = ({ toggleModal }) => {
  return (
    <PhonebookControlls>
      <ConstactsSelect />
      <FilterContacts />
      <TextButton type="button" onClick={toggleModal} text="Add contact" />
    </PhonebookControlls>
  );
};
