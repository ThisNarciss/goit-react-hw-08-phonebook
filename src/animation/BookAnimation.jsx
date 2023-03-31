import { LogoIcon } from 'custom-icon/LogoMobileIcon';
import {
  Back,
  Book,
  BookLink,
  BookText,
  Front,
  HandIcon,
  PageFive,
  PageFore,
  PageOne,
  PageSix,
  PageThree,
  PageTwo,
} from './BookAnimation.styled';

import { useAuth } from 'hooks/useAuth';

export function BookAnimation() {
  const { isLoggedIn } = useAuth();
  return (
    <Book>
      <Back></Back>
      <PageSix>
        <ul>
          <li>
            <BookText>Alison Nader: 869-484-6441</BookText>
          </li>
          <li>
            <BookText>Arthur Abbott IV: 681-247-5168</BookText>
          </li>
          <li>
            <BookText>Salvatore Haag: 872-949-5219</BookText>
          </li>
          <li>
            <BookText>Allen Shields: 659-227-2640</BookText>
          </li>
          <li>
            <BookText>Pablo Jacobi V: 249-341-0531</BookText>
          </li>
          <li>
            <BookText>Ryan Moen: 464-784-1612</BookText>
          </li>
          <li>
            <BookText>Kristina McCullough: 444-519-4075</BookText>
          </li>
          <li>
            <BookText>Joanna Crooks: 931-218-8192</BookText>
          </li>
          <li>
            <BookText>Douglas Gutmann: 995-282-3131</BookText>
          </li>
        </ul>
      </PageSix>
      <PageFive>
        <BookLink to={isLoggedIn ? '/contacts' : '/login'}>
          <LogoIcon size={70} />
        </BookLink>
        <HandIcon size={25} />
      </PageFive>
      <PageFore></PageFore>
      <PageThree></PageThree>
      <PageTwo></PageTwo>
      <PageOne></PageOne>
      <Front></Front>
    </Book>
  );
}
