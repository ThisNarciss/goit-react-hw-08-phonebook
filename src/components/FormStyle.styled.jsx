import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

import bgImgHomePage from 'images/bg-02.webp';

export const UserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 450px;
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

// Registration and Login Form

export const FormRegLog = styled(Form)`
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px;
  background: #9152f8;
  background-image: url(${bgImgHomePage});
  margin: 0 auto;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.12);
`;

export const InputLabelBox = styled.div`
  position: relative;
  margin-bottom: 35px;
`;

export const LabelRegLog = styled.label`
  color: #c6c6c6;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all 300ms ease;
`;

export const InputRegLog = styled(Field)`
  background: none;
  color: #fff68f;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 3px solid #c6c6c6;
  :focus {
    outline: none;
  }
  :focus ~ label,
  :valid ~ label {
    top: -14px;
    font-size: 12px;
    color: #fff68f;
  }
  :focus ~ span:before {
    width: 100%;
  }
`;
export const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &:before {
    content: '';
    height: 3px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: #fff68f;
    transition: 300ms ease all;
    left: 0%;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;
export const Error = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
`;