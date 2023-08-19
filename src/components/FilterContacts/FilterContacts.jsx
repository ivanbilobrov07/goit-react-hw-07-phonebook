import { useDispatch, useSelector } from 'react-redux';

import { selectFilterByQuery } from 'redux/selectors';

import { FilterInput, FilterFormGroup } from './FilterContacts.styled';
import { setFilterQuery } from 'redux/filter/filterSlice';

export const FilterContacts = () => {
  const filter = useSelector(selectFilterByQuery);
  const dispatch = useDispatch();

  const handleFilterValueInput = ({ target: { value } }) => {
    value = value.toLowerCase();

    dispatch(setFilterQuery(value));
  };

  return (
    <FilterFormGroup>
      Search:
      <FilterInput
        type="text"
        name="filter"
        onChange={handleFilterValueInput}
        value={filter}
      />
    </FilterFormGroup>
  );
};
