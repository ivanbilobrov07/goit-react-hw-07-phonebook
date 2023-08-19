import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 100px 0;
`;

export const Title = styled.h1`
  padding: 15px 0;
  margin-bottom: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blue_background};
  color: ${({ theme }) => theme.colors.blue_text};
`;

export const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.blue_text};
`;
