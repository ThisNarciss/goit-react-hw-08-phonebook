import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';

const nameId = nanoid();
const emailId = nanoid();
const passwordId = nanoid();

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(registerUser(formData));
    e.target.reset();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor={nameId}></label>
      <input type="text" name="name" id={nameId} />
      <label htmlFor={emailId}></label>
      <input type="email" name="email" id={emailId} />
      <label htmlFor={passwordId}></label>
      <input type="password" name="password" id={passwordId} />
      <button>submit</button>
    </form>
  );
}
