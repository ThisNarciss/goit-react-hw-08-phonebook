import styled from '@emotion/styled';

export const List = styled.ul`
  width: min(100%, 60rem);
  overflow: hidden;
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 4rem);
  list-style: none;
  perspective: 1000px;
  display: grid;
  row-gap: 0.5rem;
`;
