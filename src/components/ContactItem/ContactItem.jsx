import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ContainerBtn,
  Item,
  ItemLetter,
  Text,
  Letter,
} from './ContactItem.styled';
import { BiUser } from 'react-icons/bi';
import { deleteContact } from 'redux/contacts/operations';
import { LoaderBtn } from 'components/Loader/Loader';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { UpdateModalForm } from 'components/UpdateModalForm/UpdateModalForm';

export function ContactItem({ bool, id, name, number }) {
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
    <>
      {bool && (
        <ItemLetter>
          <Letter>{name.slice(0, 1)}</Letter>
        </ItemLetter>
      )}
      <Item>
        <BiUser size={20} />
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
            sx={{
              ':hover': { color: 'white', backgroundColor: 'red' },
              transitionProperty: 'all',

              transitionDuration: '250ms',
              transitionTimingFunction: 'linear',
            }}
          >
            {!isDeleting && <DeleteIcon fontSize="inherit" />}
            {isDeleting && deleteBtnId === id && <LoaderBtn />}
          </IconButton>
          <UpdateModalForm id={id} name={name} number={number} />
        </ContainerBtn>
      </Item>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
