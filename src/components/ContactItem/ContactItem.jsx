import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Item, Text } from './ContactItem.styled';
import { BiUser } from 'react-icons/bi';
import { deleteContact } from 'redux/contacts/operations';
import { LoaderBtn } from 'components/Loader/Loader';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function ContactItem({ id, name, number }) {
  const [delBtnId, setDelBtnId] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const onBtnDeleteClick = id => {
    setDelBtnId(id);
    setIsDeleting(true);
    dispatch(deleteContact(id))
      .unwrap()
      .finally(() => setIsDeleting(false));
  };

  return (
    <Item>
      <BiUser />
      <Text>
        {name}: {number}
      </Text>

      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => {
          onBtnDeleteClick(id);
        }}
        disabled={isDeleting}
      >
        {!isDeleting && <DeleteIcon fontSize="inherit" />}
        {isDeleting && delBtnId === id && <LoaderBtn />}
      </IconButton>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
