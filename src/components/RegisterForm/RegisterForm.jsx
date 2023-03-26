import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { Section } from 'components/Section/Section';
import { Container } from '@mui/system';
import {
  Error,
  FormRegLog,
  InputRegLog,
  LabelRegLog,
} from 'components/FormStyle.styled';
import { Formik } from 'formik';

const nameId = nanoid();
const emailId = nanoid();
const passwordId = nanoid();

const schema = yup.object().shape({
  name: yup.string().min(2).max(30).trim().required(),
  email: yup.string().trim().required(),
  password: yup.string().min(7).trim().required(),
});

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export function RegisterForm() {
  const dispatch = useDispatch();

  const registeredUser = values => {
    dispatch(registerUser(values));
  };

  const handleFormSubmit = (values, { resetForm }) => {
    registeredUser(values);
    resetForm();
  };
  return (
    <Section title="Sign Up">
      <Container maxWidth="xl">
        <Formik
          validationSchema={schema}
          initialValues={initialValue}
          onSubmit={handleFormSubmit}
        >
          <FormRegLog>
            <LabelRegLog htmlFor={nameId}>Name</LabelRegLog>
            <InputRegLog
              type="text"
              name="name"
              id={nameId}
              required
              placeholder="Name*"
            />
            <Error name="name" component="p" />

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
              Register
            </Button>
          </FormRegLog>
        </Formik>
      </Container>
    </Section>
  );
}
