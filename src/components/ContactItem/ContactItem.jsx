import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ContainerBtn,
  ContainerItem,
  Item,
  ItemLetter,
  Letter,
} from './ContactItem.styled';
import { BiUser } from 'react-icons/bi';
import { deleteContact } from 'redux/contacts/operations';
import { LoaderBtn } from 'components/Loader/Loader';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { UpdateModalForm } from 'components/UpdateModalForm/UpdateModalForm';
import { TelLink, Text } from './ContactItem.material';
import { useTheme } from '@emotion/react';

export function ContactItem({ bool, id, name, number }) {
  const theme = useTheme();
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
      <Item theme={theme}>
        <ContainerItem>
          <Text>
            <BiUser size={20} />
            {name}:<TelLink href={`tel:${number}`}>{number}</TelLink>
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
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              }}
            >
              {!isDeleting && <DeleteIcon fontSize="inherit" />}
              {isDeleting && deleteBtnId === id && <LoaderBtn />}
            </IconButton>
            <UpdateModalForm id={id} name={name} number={number} />
          </ContainerBtn>
        </ContainerItem>
      </Item>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
