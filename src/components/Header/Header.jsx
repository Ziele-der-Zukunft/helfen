import React from 'react';
import css from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";
// import LanguageSwitcherContainer from "components/redux/LanguageSwitcherContainer.jsx";

const Header = () => {
  return (
    <div className={css.headerWrap}>
      <Logo />
        <LanguageSwitcher />
        {/* <LanguageSwitcherContainer /> */}
    </div>
  );
};

export default Header;
