import { Outlet } from 'react-router-dom';

import { Container } from 'components/Container.styled';
import {
  StyledHeader,
  StyledList,
  StyledNav,
  StyledNavLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <StyledNav>
            <StyledList>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="phonebook_thunk">
                  Phonebook by thunk
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="phonebook_RTK">
                  Phonebook by RTK
                </StyledNavLink>
              </li>
            </StyledList>
          </StyledNav>
        </Container>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};
