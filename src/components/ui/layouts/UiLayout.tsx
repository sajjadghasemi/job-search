import { Outlet } from 'react-router-dom';
import HomeHeader from './HomeHeader';

const UiLayout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
};

export default UiLayout;
