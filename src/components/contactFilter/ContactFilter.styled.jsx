import styled from '@emotion/styled';

export const InputLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const FormInput = styled.input`
  margin-left: 20px;

  padding: 0.2rem 0.4rem;
  color: ${props => props.theme.colors.textColor};
  border: ${props => `1px solid ${props.theme.colors.borderColor}`};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: 0;
    box-shadow: ${props => props.theme.colors.inputBoxShadow};
  }
`;
