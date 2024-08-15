import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import css from './Header.module.css';
import Logo from '../Logo/Logo.jsx';
import Navigation from 'components/Navigation/Navigation.jsx';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';
import handleScroll from 'js/handleScroll.js';
import useOverflowDetection from 'hooks/useOverflowDetection';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [freeSpace, setFreeSpace] = useState(0);
  const headerRef = useRef(null);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    const cleanup = handleScroll(setScrolled);
    return cleanup;
  }, []);

  useOverflowDetection(headerRef, setFreeSpace, language);

  return (
    <div ref={headerRef} className={`${css.headerWrap} ${scrolled ? css.scrolled : ''}`}>
      <Logo />
      <Navigation freeSpace={freeSpace} />
      <LanguageSwitcher />
    </div>
  );
};

export default Header;


// варіант переповнення без px


// import React, { useEffect, useRef, useState } from 'react';
// import css from './Header.module.css';
// import Logo from '../Logo/Logo.jsx';
// import Navigation from 'components/Navigation/Navigation.jsx';
// import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';
// import handleScroll from 'js/handleScroll.js';
// import useOverflowDetection from 'hooks/useOverflowDetection';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isOverflowing, setIsOverflowing] = useState(false);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const cleanup = handleScroll(setScrolled);
//     return cleanup;
//   }, []);

//   useOverflowDetection(headerRef, setIsOverflowing);

//   return (
//     <div ref={headerRef} className={`${css.headerWrap} ${scrolled ? css.scrolled : ''}`}>
//       <Logo />
//       <Navigation isOverflowing={isOverflowing} />
//       <LanguageSwitcher />
//     </div>
//   );
// };

// export default Header;




// ------------- зміна мови сайту через передачу props

// import React from 'react';
// import css from './Header.module.css';
// import Logo from '../Logo/Logo.jsx';
// import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';

// const Header = ({language, setLanguage }) => {
//   return (
//     <div className={css.headerWrap}>
//       <Logo />
//       <LanguageSwitcher language={language} setLanguage={setLanguage} />
//     </div>
//   );
// };

// export default Header;
