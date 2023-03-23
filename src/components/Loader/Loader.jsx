import { Oval, ThreeCircles } from 'react-loader-spinner';

export function Loader() {
  return (
    <ThreeCircles
      height="70"
      width="70"
      color="blue"
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
}

export function LoaderBtn() {
  return (
    <Oval
      height={20}
      width={20}
      color="blue"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="blue"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
}
