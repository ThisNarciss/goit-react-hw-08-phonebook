import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { Section } from 'components/Section/Section';
import { Container } from '@mui/system';
import { Formik } from 'formik';

import {
  Error,
  FormRegLog,
  InputRegLog,
  LabelRegLog,
} from 'components/FormStyle.styled';

const emailId = nanoid();
const passwordId = nanoid();

const schema = yup.object().shape({
  email: yup.string().trim().required(),
  password: yup.string().min(7).trim().required(),
});

const initialValue = {
  email: '',
  password: '',
};

export function LoginForm() {
  const dispatch = useDispatch();

  const signInUser = values => {
    dispatch(loginUser(values));
  };

  const handleFormSubmit = (values, { resetForm }) => {
    signInUser(values);
    resetForm();
  };

  return (
    <Section title="Sign In">
      <Container maxWidth="xl">
        <Formik
          validationSchema={schema}
          initialValues={initialValue}
          onSubmit={handleFormSubmit}
        >
          <FormRegLog>
            <LabelRegLog htmlFor={emailId}>Email</LabelRegLog>
            <InputRegLog
              type="email"
              name="email"
              id={emailId}
              required
              placeholder="Email*"
            />
            <Error name="email" component="p" />

            <LabelRegLog htmlFor={passwordId}>Password</LabelRegLog>
            <InputRegLog
              type="password"
              name="password"
              id={passwordId}
              required
              placeholder="Password*"
            />
            <Error name="password" component="p" />

            <Button type="submit" variant="contained">
              Login
            </Button>
          </FormRegLog>
        </Formik>
      </Container>
    </Section>
  );
}
