import React from 'react';
import css from './Header.module.css';
import Logo from '../Logo/Logo.jsx';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';
// import LanguageSwitcherContainer from "components/redux/LanguageSwitcherContainer.jsx";

const Header = ({language, setLanguage }) => {
  return (
    <div className={css.headerWrap}>
      <Logo />
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      {/* <LanguageSwitcherContainer /> */}
    </div>
  );
};

export default Header;
