import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { LoaderBtn } from 'components/Loader/Loader';

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

  const handleSubmitEditsContact = e => {
    e.preventDefault();
    setIsEdit(true);
    dispatch(
      editContact({
        id: editBtnId,
        value: { name: e.target.name.value, number: e.target.number.value },
      })
    )
      .unwrap()
      .finally(() => setIsEdit(false));
    setOpen(false);
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
          <form onSubmit={handleSubmitEditsContact}>
            <label htmlFor={nameInputId}></label>
            <input
              defaultValue={name}
              type="text"
              name="name"
              id={nameInputId}
            />
            <label htmlFor={numberInputId}></label>
            <input
              defaultValue={number}
              type="tel"
              name="number"
              id={numberInputId}
            />
            <button onClose={handleClose}>edits</button>
          </form>
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
