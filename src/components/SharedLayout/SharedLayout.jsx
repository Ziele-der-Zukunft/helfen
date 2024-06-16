import { Outlet } from 'react-router-dom';
import FaviconAndTitle from 'components/FaviconAndTitle/FaviconAndTitle.jsx';
import Header from 'components/Header/Header.jsx';

const SharedLayout = () => {
  return (
    <>
      <FaviconAndTitle />
      <Header />

      <Outlet />
    </>
  );
};

export default SharedLayout;
