import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const UserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const FormInput = styled(Field)`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.3rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Error = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
`;
