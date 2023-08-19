import { useDispatch, useSelector } from 'react-redux';

import { selectFilterByOption } from 'redux/selectors';
import { setFilterOption } from 'redux/filter/filterSlice';

import { StyledSelect } from './ContactsSelect.styled';

export const ConstactsSelect = () => {
  const option = useSelector(selectFilterByOption);
  const dispatch = useDispatch();

  const selectOptions = [
    { value: 'without', label: 'Without filter' },
    { value: 'ascending', label: 'From A to Z' },
    { value: 'descending', label: 'From Z to A' },
  ];

  const defaultValue = selectOptions.find(op => op.value === option);

  const handleOptionChange = ({ value }) => {
    dispatch(setFilterOption(value));
  };

  return (
    <StyledSelect
      onChange={handleOptionChange}
      value={defaultValue}
      options={selectOptions}
    />
  );
};
