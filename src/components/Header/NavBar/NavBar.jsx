import { useSelector } from 'react-redux';
import css from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBarComp = () => {
  const language = useSelector(state => state.language);
  const mainPage = language === 'de' ? 'Startseite' : language === 'ua' ? 'Головна' : 'Main';
  const projectsPage = language === 'de' ? 'Projekte' : language === 'ua' ? 'Проєкти' : 'Projects';
  const contactsPage = language === 'de' ? 'Kontakte' : language === 'ua' ? 'Контакти' : 'Contacts';

  return (
    <nav className={css.navBar}>
      <NavLink className={css.navBarLink} to="/startseite">
        {mainPage}
      </NavLink>
      <NavLink className={css.navBarLink} to="/projekte">
        {projectsPage}
      </NavLink>
      <NavLink className={css.navBarLink} to="/kontakte">
        {contactsPage}
      </NavLink>
    </nav>
  );
};
export default NavBarComp;
