import css from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";

const Header = () => {
  return (
    <div className={css.headerWrap}>
      <Logo />
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
