import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-align: center;
  font-size: 14px;
  line-height: 1.15;

  padding: 0 10px;
  &.active {
    color: rgb(25, 118, 210);
  }
  font-family: inherit;
  @media screen and (min-width: 600px) {
    font-size: 16px;
    padding: 0 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (min-width: 600px) {
    gap: 10px;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row;
  }
`;
