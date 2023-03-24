import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-align: center;
  font-size: 16px;
  line-height: 1.15;
  &.active {
    color: black;
  }
  font-family: inherit;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;
