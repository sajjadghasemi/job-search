import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import HomeHeader from './HomeHeader';

const UiLayout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default UiLayout;
