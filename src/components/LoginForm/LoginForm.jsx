import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

const emailId = nanoid();
const passwordId = nanoid();

export function LoginForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(loginUser(formData));
    e.target.reset();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor={emailId}></label>
      <input type="email" name="email" id={emailId} />
      <label htmlFor={passwordId}></label>
      <input type="password" name="password" id={passwordId} />
      <button>submit</button>
    </form>
  );
}
