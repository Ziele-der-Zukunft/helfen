import { useSelector } from 'react-redux';
import css from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBarComp = () => {
  const language = useSelector(state => state.language);
  return (
    <nav className={css.navBar}>
      <NavLink className={css.navBarLink} to="/startseite">
        {language === 'de'
          ? `Startseite`
          : language === 'ua'
          ? `Головна`
          : `Main`}
      </NavLink>
      <NavLink className={css.navBarLink} to="/projekte">
        {language === 'de'
          ? `Projekte`
          : language === 'ua'
          ? `Проєкти`
          : `Projects`}
      </NavLink>
      <NavLink className={css.navBarLink} to="/kontakte">
        {language === 'de'
          ? `Kontakte`
          : language === 'ua'
          ? `Контакти`
          : `Contacts`}
      </NavLink>
    </nav>
  );
};
export default NavBarComp;
