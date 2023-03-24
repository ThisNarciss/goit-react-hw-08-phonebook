import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContainerBtn, Item, Text } from './ContactItem.styled';
import { BiUser } from 'react-icons/bi';
import { deleteContact } from 'redux/contacts/operations';
import { LoaderBtn } from 'components/Loader/Loader';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { UpdateModalForm } from 'components/UpdateModalForm/UpdateModalForm';

export function ContactItem({ id, name, number }) {
  const [deleteBtnId, setDeleteBtnId] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const onBtnDeleteClick = id => {
    setDeleteBtnId(id);
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
      <ContainerBtn>
        <IconButton
          aria-label="delete"
          size="medium"
          onClick={() => {
            onBtnDeleteClick(id);
          }}
          disabled={isDeleting}
        >
          {!isDeleting && <DeleteIcon fontSize="inherit" />}
          {isDeleting && deleteBtnId === id && <LoaderBtn />}
        </IconButton>
        <UpdateModalForm id={id} name={name} number={number} />
      </ContainerBtn>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
