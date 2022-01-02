import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
  width: 380px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props => `1px solid ${props.theme.colors.primary}`};
`;

export const Text = styled.p`
  font-size: 1.1rem;
`;

export const ItemBtn = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 5px;
  width: 75px;
  font-size: 0.8rem;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    outline: 0;
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};
  }
`;
