import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const UserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 400px;
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

export const FormRegLog = styled(Form)`
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px;
  background: #9152f8;
  background: -webkit-linear-gradient(top, #7579ff, #b224ef);
  margin: 0 auto;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.12);
`;

export const InputRegLog = styled(Field)`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.3rem 0.75rem;
  margin: 10px auto;
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

export const LabelRegLog = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Error = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
`;
