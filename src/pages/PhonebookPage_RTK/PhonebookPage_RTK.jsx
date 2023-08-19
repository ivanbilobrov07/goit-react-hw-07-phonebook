import { Phonebook } from 'components/Phonebook(RTK_query)';
import { Container } from 'components/Container.styled';
import { StyledSection, Title, Wrapper } from 'pages/PhonebookPage.styled';

export const PhonebookPageRTK = () => {
  return (
    <>
      <StyledSection>
        <Container>
          <Wrapper>
            <Title>Phonebook</Title>
            <Phonebook />
          </Wrapper>
        </Container>
      </StyledSection>
    </>
  );
};
