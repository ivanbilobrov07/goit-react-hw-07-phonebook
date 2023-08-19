import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  box-shadow: 0 5px 5px gray;
  background-color: rgb(238, 238, 238);
`;

export const StyledNav = styled.nav`
  padding: 20px;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.blue_background};
  color: black;

  &.active {
    background-color: ${props => props.theme.colors.blue_text};
  }
`;
