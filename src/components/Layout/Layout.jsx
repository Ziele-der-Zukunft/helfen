import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Container, 
  // Wrap
} from './Layout.styled';
import Header from '../Header/Header';
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <>
    <Container>
      <Header />
      {/* <Wrap> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      {/* </Wrap> */}
      <Footer />
    </Container>
    </>
  );
};

export default Layout;