import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1220px;
  border: 1px solid ${({ theme }) => theme.colors.blue_text};
`;

export const Title = styled.h1`
  padding: 15px 0;
  margin-bottom: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blue_background};
  color: ${({ theme }) => theme.colors.blue_text};
`;
