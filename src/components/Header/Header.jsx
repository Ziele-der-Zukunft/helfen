import css from './Header.module.css';
import Navbar from 'components/Header/NavBar/NavBar';
import LangBar from 'components/Header/LangBar/LangBar';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {

  return (
    <div className={css.headerComponent}>
      <div className={css.buttonMobileMenu}>
        <MobileMenu />
      </div>
      <div className={css.navbar}>
        <Navbar />
      </div>
      <LangBar />
    </div>
  );
};
export default Header;







/*============================================================================================================*/


// import css from './Header.module.css';
// import Navbar from 'components/Header/NavBar/NavBar';
// import LangBar from 'components/Header/LangBar/LangBar';
// import MobileMenu from './MobileMenu/MobileMenu';
// import { useEffect, useState } from 'react';
// import { throttle } from 'lodash';

// const Header = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = throttle(() => {
//       setIsMobile(window.innerWidth <= 768);
//     }, 500);

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className={css.headerComponent}>
//       {isMobile ? <MobileMenu /> : <Navbar />}
//       <LangBar />
//     </div>
//   );
// };
// export default Header;