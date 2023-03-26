import PropTypes from 'prop-types';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { LoaderBtn } from 'components/Loader/Loader';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Error,
  FormInput,
  InputBox,
  Label,
  UserForm,
} from 'components/FormStyle.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const schema = yup.object().shape({
  name: yup.string().min(2).max(30).trim().required(),
  number: yup.string().min(12).max(13).trim().required(),
});

const nameInputId = nanoid();
const numberInputId = nanoid();

export function UpdateModalForm({ id, name, number }) {
  const [editBtnId, setEditBtnId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setEditBtnId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const editedContact = value => {
    setIsEdit(true);
    dispatch(
      editContact({
        id: editBtnId,
        value: { name: value.name, number: value.number },
      })
    )
      .unwrap()
      .finally(() => setIsEdit(false));
    setOpen(false);
  };

  const handleSubmitEditsContact = (values, { resetForm }) => {
    editedContact(values);
    resetForm();
  };

  return (
    <>
      <IconButton aria-label="edits" size="medium" onClick={handleOpen}>
        {!isEdit && <EditIcon fontSize="inherit" />}
        {isEdit && editBtnId === id && <LoaderBtn />}
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            validationSchema={schema}
            initialValues={{ name, number }}
            onSubmit={handleSubmitEditsContact}
          >
            {({ values }) => (
              <UserForm>
                <InputBox>
                  <Label htmlFor={nameInputId}>Name</Label>
                  <FormInput
                    id={nameInputId}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={values.name}
                  />
                  <Error name="name" component="p" />
                </InputBox>

                <InputBox>
                  <Label htmlFor={numberInputId}>Number</Label>
                  <FormInput
                    id={numberInputId}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={values.number}
                  />
                  <Error name="number" component="p" />
                </InputBox>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<AddCircleIcon fontSize="large" />}
                >
                  Edit
                </Button>
              </UserForm>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}

UpdateModalForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
