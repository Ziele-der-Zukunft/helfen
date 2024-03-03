import React, { useEffect, useState } from 'react';
import css from './Header.module.css';
import Logo from '../Logo/Logo.jsx';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';
import handleScroll from 'js/handleScroll.js';


const Header = () => {
  
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const cleanup = handleScroll(setScrolled);
    return cleanup;
  }, []);

  return (
    <div className={`${css.headerWrap} ${scrolled ? css.scrolled : ''}`}>
      <Logo />
      <LanguageSwitcher />
    </div>
  );
};

export default Header;

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
