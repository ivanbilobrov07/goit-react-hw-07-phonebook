import { ClipLoader } from 'react-spinners';

import { Wrapper } from './Spinner.styled';

export const Spinner = () => {
  return (
    <Wrapper>
      <ClipLoader color="#36d7b7" />;
    </Wrapper>
  );
};
