import { ContactItem } from 'components/ContactItem/ContactItem';

import { useMemo, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';
import { List } from './ContactList.styled';

const arr = [];

export const ContactList = () => {
  const getFilteredContacts = useSelector(selectFilterContacts);
  const [boolArr, setBoolArr] = useState([]);

  let idx = -1;
  useMemo(
    () =>
      getFilteredContacts
        .map(item => item.name.slice(0, 1))
        .filter((course, index, array) => {
          setBoolArr(prevState => [
            ...prevState,
            array.indexOf(course) === index,
          ]);
          return arr.push(array.indexOf(course) === index);
        }),
    [getFilteredContacts]
  );

  return (
    <List>
      {getFilteredContacts.map(contact => {
        idx += 1;
        return (
          <ContactItem key={contact.id} bool={boolArr[idx]} {...contact} />
        );
      })}
    </List>
  );
};
